import React from 'react'
import BasePage from '../../components/BasePage'

const Ledger = () => {

   const ledgerSidebarData = [
  { name: "New", onClick: () => {},navigate:"/dashboard/ledger/new" },
  { name: "Edit", onClick: () => {} },
  { name: "Delete", onClick: () => {} },
  { name: "Export-Excel", onClick: () => {} },
  { name: "BulkUpd", onClick: () => {} },
  { name: "Filter", onClick: () => {} },
  { name: "Label Prn", onClick: () => {} },
  { name: "Envelopes", onClick: () => {} },
  { name: "Op. Bal", onClick: () => {} },
  { name: "Statement", onClick: () => {} },
  { name: "Dup Ledgers", onClick: () => {} },
  { name: "Non/Used", onClick: () => {} }
];

    const ledgerTableData = [
  {
    Sr: 1,
    "Ledger Name": "Agent Commission",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "1000 Dr",
    Active: "Yes",
  },
  {
    Sr: 2,
    "Ledger Name": "Bank Charges",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 3,
    "Ledger Name": "Books & Periodicals",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "500 Dr",
    Active: "Yes",
  },
  {
    Sr: 4,
    "Ledger Name": "Cash Discount",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 5,
    "Ledger Name": "Cash In Hand",
    "Ledger Group": "Cash-in-Hand",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "270 Cr",
    Active: "Yes",
  },
  {
    Sr: 6,
    "Ledger Name": "CESS A/C",
    "Ledger Group": "Duties & Taxes",
    "Op.Balance": "0 Cr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 7,
    "Ledger Name": "CGST A/C",
    "Ledger Group": "Duties & Taxes",
    "Op.Balance": "0 Cr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 8,
    "Ledger Name": "Electricity Expense",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 9,
    "Ledger Name": "Entertainment Expense",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 10,
    "Ledger Name": "Goods Shortage",
    "Ledger Group": "Sales Accounts",
    "Op.Balance": "0 Cr",
    "Cl.Balance": "0 Cr",
    Active: "Yes",
  },
  {
    Sr: 11,
    "Ledger Name": "GST Interest A/c",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 12,
    "Ledger Name": "GST Penalty A/c",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 13,
    "Ledger Name": "IGST A/C",
    "Ledger Group": "Duties & Taxes",
    "Op.Balance": "0 Cr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 14,
    "Ledger Name": "Interest Received",
    "Ledger Group": "Indirect Incomes",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 15,
    "Ledger Name": "Labour Charges",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 16,
    "Ledger Name": "Miscellaneous Expenses",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 17,
    "Ledger Name": "Office Rent",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 18,
    "Ledger Name": "Printing & Stationery",
    "Ledger Group": "Indirect Expenses",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 19,
    "Ledger Name": "Purchase Return",
    "Ledger Group": "Purchase Accounts",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
  {
    Sr: 19,
    "Ledger Name": "Purchase Return",
    "Ledger Group": "Purchase Accounts",
    "Op.Balance": "0 Dr",
    "Cl.Balance": "0 Dr",
    Active: "Yes",
  },
];


  return (
    <div className='w-full'>
      <BasePage heading="Ledger Master" Sidebardata={ledgerSidebarData} tableData={ledgerTableData}/>
    </div>
  )
}

export default Ledger
