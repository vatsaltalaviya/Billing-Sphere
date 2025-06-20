import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token')
const ownerId = localStorage.getItem('uid')

export const fetchLedgerGroup = createAsyncThunk("ledgerGroup", async (_, thunkAPI) => {
    const token = localStorage.getItem("token");

    const headers = { Authorization: token };
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/ledger-group/get-all`, { headers });
        const data = res.data
        if (data.success) {
            return data.data
        }
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
})

export const fetchAllledgers = createAsyncThunk("FetchLedgers", async (_, thunkAPI) => {
    try {
        const headers = { Authorization: token };
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/ledger/get-all-ledger/${ownerId}`, { headers });
        const data = res.data.data;

        const groupIds = [...new Set(data.map((item) => item.ledgerGroup))]

        const groupMap = {}
        await Promise.all(
            groupIds.map(async (id) => {
                try {
                    const groupRes = await axios.get(
                        `${import.meta.env.VITE_BASE_URL}/ledger-group/get-single-ledger/${id}`,
                        { headers: { Authorization: `${token}` } }
                    );
                    if (groupRes.data.success) {
                        groupMap[id] = groupRes.data.data.name;
                    }
                } catch (error) {
                    console.log("Error Fetching Ledgers", error);

                }
            })
        )
        return { ledgers: data, groupMap }

    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const createLedger = createAsyncThunk("createLedgers", async (itemData, thunkAPI) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/ledger/create-ledger`, itemData, { headers: { Authorization: `${token}` } })
        const data = res.data;
        if (data.success) {
            return data.data
        } else {
            return thunkAPI.rejectWithValue(data.message || "ledger creation failed");
        }

    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
})

export const updateLedger = createAsyncThunk("UpdateLedger", async ({ itemData, editId }, thunkAPI) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.put(
            `${import.meta.env.VITE_BASE_URL}/ledger/update-ledger/${editId}`, itemData,
            { headers: { Authorization: `${token}` } }
        );
        const data = res.data;
        if (data.success) {
            return data.data
        }
        else {
            return thunkAPI.rejectWithValue(data.message || "Update failed");
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
})

export const deleteLedger = createAsyncThunk("DeleteLedger", async ({ editId }, thunkAPI) => {
    const token = localStorage.getItem('token')
    const itemData = { status: "No" }
    try {
        const res = await axios.put(
            `${import.meta.env.VITE_BASE_URL}/ledger/update-ledger/${editId}`, itemData,
            { headers: { Authorization: `${token}` } }
        );
        const data = res.data;
        if (data.success) {
            return data.data
        }
        else {
            return thunkAPI.rejectWithValue(data.message || "Update failed");
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
})

const ledgerSlice = createSlice({
    name: "ledgers",
    initialState: {
        ledgers: [],
        ledgerGroup: [],
        groupMap: {},
        loading: false,
        error: null,
        ledgerDelete: false,
        searchingLedgers: [],
        searchledgerquery: '',
        ShowDeleteAlert: false,
        clickYes: false

    },
    reducers: {
        deleteAlert: (state, action) => {
            state.ShowDeleteAlert = action.payload
        },
        setLedgerSearchQuery: (state, action) => {
            const query = action.payload.trim().toLowerCase();
            state.searchledgerquery = action.payload;

            if (query === "") {
                state.searchingLedgers = state.ledgers;
            } else {
                state.searchingLedgers = state.ledgers.filter((ledger) =>
                    (ledger?.name || "").toLowerCase().includes(query)
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLedgerGroup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLedgerGroup.fulfilled, (state, action) => {
                state.loading = false;
                state.ledgerGroup = action.payload;
            })
            .addCase(fetchLedgerGroup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(fetchAllledgers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllledgers.fulfilled, (state, action) => {
                state.loading = false;
                state.ledgers = action.payload.ledgers;
                state.groupMap = action.payload.groupMap
                state.searchingLedgers = action.payload.ledgers;
            })
            .addCase(fetchAllledgers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(createLedger.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createLedger.fulfilled, (state, action) => {
                state.loading = false;
                state.ledgerGroup = action.payload;
            })
            .addCase(createLedger.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(updateLedger.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateLedger.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(updateLedger.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(deleteLedger.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.ledgerDelete = false;
            })
            .addCase(deleteLedger.fulfilled, (state, action) => {
                state.loading = false;
                state.ledgerDelete = true;

            })
            .addCase(deleteLedger.rejected, (state, action) => {
                state.loading = false;
                state.ledgerDelete = false;
                state.error = action.payload || "Something went wrong";
            })
    }
})

export default ledgerSlice.reducer
export const { setLedgerSearchQuery, deleteAlert, PositiveRes } = ledgerSlice.actions;