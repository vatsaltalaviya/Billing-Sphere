import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const companyId = localStorage.getItem('companies')
const token = localStorage.getItem('token')
export const fetchItems = createAsyncThunk("fetchItems", async (_, thunkAPI) => {
    try {
        // Fetch all items
        const res = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/items/get-items/${companyId}`,
            { headers: { Authorization: `${token}` } }
        );
        const data = res.data.data;
        return { items: data }; //  return both items and group map
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const fetchDropdowns = createAsyncThunk('items/fetchDropdowns', async () => {

    const ownerId = localStorage.getItem("uid");
    const token = localStorage.getItem("token");

    const headers = { Authorization: token };

    const [groups, brands, hsns, units, stores, taxes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BASE_URL}/item-group/get/${ownerId}`, { headers }),
        axios.get(`${import.meta.env.VITE_BASE_URL}/item-brand/get/${ownerId}`, { headers }),
        axios.get(`${import.meta.env.VITE_BASE_URL}/hsnCode/fetchAllHsncode/${ownerId}`, { headers }),
        axios.get(`${import.meta.env.VITE_BASE_URL}/measurementLimit/fetchAllmeasurement/${ownerId}`, { headers }),
        axios.get(`${import.meta.env.VITE_BASE_URL}/store/fetchAllStore/${ownerId}`, { headers }),
        axios.get(`${import.meta.env.VITE_BASE_URL}/tax/fetchAllTax/${ownerId}`, { headers }),
    ]);

    return {
        itemGroups: groups.data.data.map((i) => ({ id: i._id, name: i.name })),
        brands: brands.data.data.map((i) => ({ id: i._id, name: i.name })),
        hsns: hsns.data.data.map((i) => ({ id: i._id, name: i.hsn ,desc:i.description})),
        units: units.data.data.map((i) => ({ id: i._id, name: i.measurement })),
        stores: stores.data.data.map((i) => ({ id: i._id, name: i.location, isActive: i.isActive })),
        taxes: taxes.data.data.map((i) => ({ id: i._id, name: i.rate })),
    };
});

export const fetchSerchItem = createAsyncThunk("serchItem", async (query, thunkAPI) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/items/get-items/search/${companyId}?query=${query}&page=1&limit=20`)
        const resdata = res.data;
        if (resdata.success) {
            return { items: resdata.data };
        }

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const fetchitemGroup = createAsyncThunk("Fetchitemgroup", async (_, thunkAPI) => {
    const ownerId = localStorage.getItem("uid");
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/item-group/get/${ownerId}`,
            { headers: { Authorization: token } }
        );
        const resdata = res.data;
        if (resdata.success) {
            return resdata.data;
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const createItem = createAsyncThunk("createItem", async (itemData, thunkAPI) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/items/create-item`,
            itemData,
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );

        const data = response.data;
        if (data.success) {
            return data.data; // or return the new item object
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item creation failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

export const updateItem = createAsyncThunk(
    'updateItem',
    async ({ itemData, editId }, { rejectWithValue }) => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_BASE_URL}/items/update-item/${editId}`,
                itemData,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            const data = res.data;
            if (data.success) {
                return data.data;
            }
            else {
                return thunkAPI.rejectWithValue(data.message || "Item Updation failed");
            }
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


export const deleteItem = createAsyncThunk(
    'deleteItem',
    async ({ editId }, { rejectWithValue }) => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.delete(
                `${import.meta.env.VITE_BASE_URL}/items/delete-item/${editId}`,
                { headers: { Authorization: `${token}` } }
            );
            const data = res.data;
            if (data.success) {
                return data.data;
            }
            else {
                return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
            }
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
export const deleteItemGroup = createAsyncThunk("deleteItemGroup", async (Url, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/item-group/delete/${Url}`,
            { headers: { Authorization: `${token}` } }
        );
        const data = res.data;
        if (data.success) {
            // ✅ Refresh dropdowns after delete
            await thunkAPI.dispatch(fetchDropdowns());
            return Url;
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});
export const deleteBrand = createAsyncThunk("deleteBrand", async (Url, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/item-brand/delete/${Url}`,
            { headers: { Authorization: `${token}` } }
        );

        const data = res.data;
        if (data.success) {
            // ✅ Refresh dropdowns after delete
            await thunkAPI.dispatch(fetchDropdowns());
            return Url;
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});
export const deletehsn = createAsyncThunk("deletehsn", async (Url, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/hsnCode/delete/${Url}`,
            { headers: { Authorization: `${token}` } }
        );

        const data = res.data;
        if (data.success) {
            // ✅ Refresh dropdowns after delete
            await thunkAPI.dispatch(fetchDropdowns());
            return Url;
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});
export const deletetax = createAsyncThunk("deletetax", async (Url, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/tax/delete/${Url}`,
            { headers: { Authorization: `${token}` } }
        );

        const data = res.data;
        if (data.success) {
            // ✅ Refresh dropdowns after delete
            await thunkAPI.dispatch(fetchDropdowns());
            return Url;
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});
export const deletestore = createAsyncThunk("deletestore", async (Url, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/store/delete/${Url}`,
            { headers: { Authorization: `${token}` } }
        );

        const data = res.data;
        if (data.success) {
            // ✅ Refresh dropdowns after delete
            await thunkAPI.dispatch(fetchDropdowns());
            return Url;
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});
export const deleteunit = createAsyncThunk("deleteunit", async (Url, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BASE_URL}/measurementLimit/delete/${Url}`,
            { headers: { Authorization: `${token}` } }
        );

        const data = res.data;
        if (data.success) {
            // ✅ Refresh dropdowns after delete
            await thunkAPI.dispatch(fetchDropdowns());
            return Url;
        } else {
            return thunkAPI.rejectWithValue(data.message || "Item Deletion failed");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});



const itemSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        dropdowns: {
            itemGroups: [],
            brands: [],
            hsns: [],
            units: [],
            stores: [],
            taxes: [],
        },
        groupMap: {},
        loading: false,
        error: null,
        itemBeingEdited: null,
        itemDelete: false,
        searchingitems: [],
        searchquery: '',
        ShowDeleteAlert: false,
        clickYes: false
    },
    reducers: {
        deleteAlert: (state, action) => {
            state.ShowDeleteAlert = action.payload
        },
        setItemSearchQuery: (state, action) => {
            state.searchquery = action.payload;
        }



    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                // state.groupMap = action.payload.groupMap;
                state.searchingitems = action.payload.items;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(fetchSerchItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSerchItem.fulfilled, (state, action) => {
                state.loading = false;
                state.searchingitems = action.payload.items;
                state.groupMap = action.payload.groupMap;
                state.searchingitems = action.payload.items;
            })
            .addCase(fetchSerchItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(fetchDropdowns.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchDropdowns.fulfilled, (state, action) => {
                state.loading = false;
                state.dropdowns = action.payload;
            })
            .addCase(fetchitemGroup.fulfilled, (state, action) => {
                state.dropdowns.itemGroups = action.payload;
            })
            .addCase(createItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createItem.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(createItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(updateItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(updateItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deleteItem.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.itemDelete = false
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.loading = false;
                state.itemDelete = true;
            })
            .addCase(deleteItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deleteItemGroup.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(deleteItemGroup.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(deleteItemGroup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deleteBrand.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(deleteBrand.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(deleteBrand.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deletehsn.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(deletehsn.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(deletehsn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deletetax.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(deletetax.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(deletetax.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deletestore.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(deletestore.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(deletestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deleteunit.pending, (state) => {
                state.loading = true;
                state.error = null;

            })
            .addCase(deleteunit.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(deleteunit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })


    },
});

export default itemSlice.reducer;
export const { deleteAlert, PositiveRes, setItemSearchQuery } = itemSlice.actions
