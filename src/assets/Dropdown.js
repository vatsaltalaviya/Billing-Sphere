export
    const dropdownData = [
        {
            name: "Accounts",
            options: [
                {
                    name: "voucher Entry",
                    navigate:"/dashboard/receipt"
                },
                {
                    name: "Quick Voucher Entry",
                },
                {
                    name: "Cheque Return Entry",
                },
                {
                    name: "Receivable Adjustment",
                },
                {
                    name: "Payable Adjustment",
                },
                {
                    name: "Daily Cash Denomination",
                },
                {
                    name: "Auto Voucher Entry",
                },
                {
                    name: "GST Payment/ Adjustment",
                },
                {
                    name: "State Master",
                },
                {
                    name: "Ledger Master",
                    navigate:'/dashboard/ledger'
                },
                {
                    name: "Ledger DashBoard",
                },
                {
                    name: "Ledger Group Master",
                },
                {
                    name: "Tax Category",
                },
                {
                    name: "Tax Category (GST)",
                    navigate:'/dashboard/items/tax'
                },
                {
                    name: "Sundry Component",
                },
                {
                    name: "HSN Commodity Master",
                    navigate:'/dashboard/items/hsn'
                },
                {
                    name: "Reports",
                    submenu: [
                        { name: "Ledger Statement" },
                        { name: "Ledger Bill Reference" },
                        { name: "Ledger Statement (T-Format)" },
                        { name: "Bank Reconciliation" },
                        { name: "Ledger Group Vouchers" },
                        { name: "Agewise Outstanding Report" },
                        { name: "VoucherTypewise Outstanding Report" },
                        { name: "Voucher Register" },
                        { name: "Voucher Summary" },
                        { name: "Cheque Deposit Register" },
                        { name: "Sundry Transaction Register" },
                        { name: "Day Book" },
                        { name: "Statistics Report" },
                        { name: "Ledger Month/Daywise Summary" },
                        { name: "Multi Ledger Printing" },
                    ],
                },
                {
                    name: "MIS Reports",
                    submenu: [
                        {
                            name: "Ledger Periodic Summary",
                        },
                        {
                            name: "Ledger Group Periodic Summary",
                        },
                        {
                            name: "Ledger Group Summary",
                        },
                        {
                            name: "VAT Report",
                        },
                        {
                            name: "GST Report",
                        },
                        {
                            name: "Cash Flow Summary",
                        },
                        {
                            name: "Group Cash Flow Summary",
                        },
                    ],
                },
                {
                    name: "Final Reports",
                    submenu: [
                        {
                            name: "Trial Balance Sheet",
                        },
                        {
                            name: "Profit Loss A/C",
                        },
                        {
                            name: "Balance Sheet",
                        },
                    ],
                },
            ],
        },
        {
            name: "Inventory",
            options: [
                { name: "Purchase" },
                { name: "Inward Challan" },
                { name: "Sales" },
                { name: "Delivery Challan" },
                { name: "Purchase Return / Debit Note" },
                { name: "Sales Return / Credit Note" },
                { name: "Purchase Enquiry" },
                { name: "Proforma Invoice" },
                { name: "Sales Quotation" },
                { name: "Stock Physical Verification" },
                { name: "Stock Shortage" },
                { name: "Manual Stock Value Sheet" },
                { name: "Quick Order List" },
                { name: "Item Info" },
                {
                    name: "Other Reports",
                    submenu: [
                        { name: "Region/ Partywise Item Sales" },
                        { name: "Pending Orders" },
                        { name: "Pending Challans" },
                        { name: "Agent Commission Register" },
                        { name: "Agent Commission Summary" },
                        { name: "Auto Production Register" },
                        { name: "Stock Transfer Register" },
                        { name: "E Invoice/Eway Register" },
                        { name: "PineLab Payment Register" }]
                },
                {
                    name: "Reports",
                    submenu: [
                        { name: "Stock Status" },
                        { name: "Stock Item Periodic Summary" },
                        { name: "Stock Movement Summary" },
                        { name: "Stock Item Movement Ledgerwise" },
                        { name: "Stock Valuation/Pricing/Margin Report" },
                        { name: "Stock Statement" },
                        { name: "Stock Statement (Multi Item)" },
                        { name: "Price List" },
                        { name: "Dispatch Summary Report" },
                        { name: "Stock Status Barcode Serialwise" },
                        { name: "Sales Register" },
                        { name: "Sales Return Register" },
                        { name: "Sales Quotation Register" },
                        { name: "Purchase Register" },
                        { name: "Purchase Enquiry Register" },
                        { name: "Purchase Return Register" },
                        { name: "Delivery Challan Register" },
                        { name: "Inward Challan Register" },
                        { name: "Shortage Register" }
                    ]
                },
                {
                    name: "MIS Reports",
                    submenu: [
                        { name: "Sales Summary" },
                        { name: "Sales Return Summary" },
                        { name: "Sales Quotation Summary" },
                        { name: "Purchase Summary" },
                        { name: "Purchase Return Summary" },
                        { name: "Shortage Summary" },
                        { name: "Stock Transfer Summary" },
                        { name: "Delivery Challan Summary" },
                        { name: "Inward Challan Summary" },
                        { name: "Consolidated Summary" },
                        { name: "Comparison Reports" },
                        { name: "Party | Item Analysis" },
                        { name: "Item | Party Analysis" },
                        { name: "Sales Performance Analysis" },
                        { name: "Purchase Performance Analysis" },
                        { name: "Min/Max Qty vs Avg Sales Analysis" },
                        { name: "InActive Items" },
                        { name: "InActive Customers" }
                    ]
                },
                { name: "Item Master",
                    navigate:'/dashboard/items'
                 },
                { name: "Item Group Master" ,
                    navigate:`/dashboard/items/itemgroup`
                },
                { name: "Unit Master",
                    navigate:`/dashboard/items/unit`
                 },
                {
                    name: "Misc. Master",
                    submenu: [
                        { name: "Retail Customer Type" },
                        { name: "Retail Customer" },
                        { name: "Clearing Type" },
                        { name: "Transporter" },
                        { name: "Store Location Master",
                        navigate:'/dashboard/items/rack'
                         },
                        { name: "Payment Mode" },
                        { name: "Brand Master",
                            navigate:"/dashboard/items/brand"
                         },
                        { name: "Import Master Profile" }
                    ]
                }
            ],
        },
        {
            name: "Admin",
            options: [
                { name: "Users" },
                { name: "User Group" },
                { name: "User DashBoard Category" },
                { name: "User Favourite Menu" },
                { name: "Company Setup" },
                { name: "Stock Voucher Print Template" },
                { name: "Account Voucher Print Template" },
                { name: "Voucher Types" },
                { name: "Work Station" },
                { name: "Mobile App Users" },
                { name: "Copy From Existing Company" },
                { name: "Message Custom Template" },
                { name: "Message Format" },
                { name: "A/c Year Locking" },
                { name: "Deleted Record Log" },
                { name: "Transaction Audit Log" },
                { name: "Master Audit Log" }
            ]
        },
        {
            name: "Utility",
            options: [
                { name: "Start Remote Support" },
                { name: "Send WhatsApp" },
                { name: "Check Internet Speed" },
                { name: "Calculator" },
                { name: "To Do List" },
                { name: "Sign PDF File" },
                { name: "Reminders" },
                { name: "Cash Denomination Calculation" },
                { name: "Change Password" },
                { name: "Change A/c Year" },
                { name: "Change Company" },
                { name: "Custom Reports" },
                { name: "Backup Data" },
                { name: "Backup Email/WhatsApp" },
                { name: "Restore Data" },
                { name: "Delete Transactions / Masters" },
                {
                    name: "Data Export",
                    submenu: [
                        { name: "Stock Voucher to Tally" },
                        { name: "A/c Voucher to Tally" },
                        { name: "Master to Tally" },
                        { name: "Comapany Master (Tally)" },
                        { name: "Tally GST A/c Setup" },
                        { name: "AccountsPro Voucher to Excel" },
                        { name: "AccountsPro Voucher to Voucher Copy" }
                    ]
                },
                {
                    name: "Data Import",
                    submenu: [
                        { name: "Import Ledgers" },
                        { name: "Import Items" },
                        { name: "Import Retail Customer" },
                        { name: "Import Transactions" },
                        { name: "Import Master From Tally" },
                        { name: "Sales Bill Generator" },
                        { name: "Voucher Copy" },
                        { name: "Update Item Rate from Excel Sheet" }
                    ]
                },
                { name: "Optimize Database" },
                { name: "Software Update Patch" },
                { name: "A/c Balance Update" },
                { name: "Stock Balance Update" },
                { name: "ReNumber Vouchers" },
                { name: "Item Display" }
            ]
        }
    ];