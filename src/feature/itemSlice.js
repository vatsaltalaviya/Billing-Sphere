import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const companyId = localStorage.getItem('companies')
const token = localStorage.getItem('token')

// 👉 Async thunk to fetch items and groupMap
export const fetchItems = createAsyncThunk("fetchItems", async (_, thunkAPI) => {

    try {
        // Fetch all items
        const res = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/items/get-items/${companyId}`,
            { headers: { Authorization: `${token}` } }
        );

        const data = res.data.data;
        // Collect all unique itemGroup IDs
        const groupIds = [...new Set(data.map((item) => item.itemGroup))];

        // Fetch group names in parallel
        const groupMap = {};
        await Promise.all(
            groupIds.map(async (id) => {
                try {
                    const groupRes = await axios.get(
                        `${import.meta.env.VITE_BASE_URL}/item-group/getById/${id}`,
                        { headers: { Authorization: `${token}` } }
                    );
                    if (groupRes.data.success) {
                        groupMap[id] = groupRes.data.data.name;
                    }
                } catch (err) {
                    console.error(`Error fetching itemGroup ${id}`, err);
                }
            })
        );

        return { items: data, groupMap }; //  return both items and group map
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
        hsns: hsns.data.data.map((i) => ({ id: i._id, name: i.hsn })),
        units: units.data.data.map((i) => ({ id: i._id, name: i.measurement })),
        stores: stores.data.data.map((i) => ({ id: i._id, name: i.location })),
        taxes: taxes.data.data.map((i) => ({ id: i._id, name: i.rate })),
    };
});

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

export const fetchItemById = createAsyncThunk(
    "fetchItemById",
    async (editId, thunkAPI) => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/items/get-item/${editId}`,
                {
                    headers: { Authorization: token },
                }
            );

            if (!res.data.success) {
                return thunkAPI.rejectWithValue("Item fetch failed");
            }

            const data = res.data.data;

            const {
                itemGroup,
                itemBrand,
                hsnCode,
                taxCategory,
                storeLocation,
                measurementUnit,
                codeNo,
                itemName,
                printName,
                retail,
                mrp,
                barcode,
                minimumStock,
                maximumStock,
                updateImage,
                images,
                status,
                openingStock,
                openingBalance,
            } = data;

            // Get readable unit name for opening balance
            const openingBalanceWithUnit = await Promise.all(
                (openingBalance || []).map(async (item) => {
                    try {
                        const unitRes = await axios.get(
                            `${import.meta.env.VITE_BASE_URL}/measurementLimit/get/${item.unit}`,
                            { headers: { Authorization: token } }
                        );
                        return {
                            ...item,
                            unit: unitRes.data?.data?.measurement || "",
                        };
                    } catch {
                        return { ...item, unit: "" };
                    }
                })
            );

            // Fetch readable labels
            const [itemGroupRes, brandRes, hsnRes, taxRes, rackRes, stockRes, barcodeRes] =
                await Promise.all([
                    itemGroup
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/item-group/getById/${itemGroup}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { name: "" } } }),

                    itemBrand
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/item-brand/getById/${itemBrand}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { name: "" } } }),

                    hsnCode
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/hsnCode/get/${hsnCode}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { hsn: "" } } }),

                    taxCategory
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/tax/fetchTaxById/${taxCategory}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { rate: "" } } }),

                    storeLocation
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/store/${storeLocation}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { location: "" } } }),

                    measurementUnit
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/measurementLimit/get/${measurementUnit}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { measurement: "" } } }),

                    barcode
                        ? axios.get(
                            `${import.meta.env.VITE_BASE_URL}/barcode-print/get-barcode/${barcode}`,
                            { headers: { Authorization: token } }
                        )
                        : Promise.resolve({ data: { data: { barcode: "" } } }),
                ]);

            // Construct the formData object
            const formData = {
                itemGroup: { id: itemGroup, name: itemGroupRes.data?.data?.name || "" },
                brand: { id: itemBrand, name: brandRes.data?.data?.name || "" },
                codeNo,
                itemName,
                printName,
                remarks: "",
                hsn: { id: hsnCode, name: hsnRes.data?.data?.hsn || "" },
                tax: { id: taxCategory, name: taxRes.data?.data?.rate || "" },
                retail,
                mrp,
                barcode: barcodeRes.data?.data?.barcode || "",
                rack: { id: storeLocation, name: rackRes.data?.data?.location || "" },
                stockunit: { id: measurementUnit, name: stockRes.data?.data?.measurement || "" },
                minStock: minimumStock,
                maxStock: maximumStock,
                updateImage,
                images,
                openstock: openingStock,
                isActive: status,
                openingBalance: openingBalanceWithUnit,
            };

            return formData;
        } catch (err) {
            console.error(err);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);



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
                state.groupMap = action.payload.groupMap;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(fetchDropdowns.fulfilled, (state, action) => {
                state.dropdowns = action.payload;
            })
            .addCase(createItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createItem.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);

            })
            .addCase(createItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(fetchItemById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItemById.fulfilled, (state, action) => {
                state.loading = false;
                state.itemBeingEdited = action.payload;
            })
            .addCase(fetchItemById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch item";
            });
    },
});

export default itemSlice.reducer;
