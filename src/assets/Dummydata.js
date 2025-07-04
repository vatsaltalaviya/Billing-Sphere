export const items =[
    {
        name:"chocolate box",
        price: 100,
        quantity: 10,

    },
    {
        name:"Fenta",
        price: 10,
        quantity: 10,

    },
    {
        name:"Lays Chips",
        price: 100,
        quantity: 10,

    },
    {
        name:"Coca Cola",
        price: 100,
        quantity: 10,

    },
    {
        name:"Pepsi",
        price: 100,
        quantity: 10,

    },
]
export const salesData = [
  {
    no: "3",
    date: "2025-05-30",
    type: "Sales",
    party: "ABC Traders",
    place: "Rajkot",
    dcNo: "1001",
    dcDate: "2025-05-29",
    items: [
      {
        itemName: "Chocolate Box",
        qty: 10,
        unit: "pcs",
        rate: 50,
        amount: 500,
        disc: 5,
        d1: "2%",
        netAmount: 490,
      },
      {
        itemName: "Cookies Pack",
        qty: 5,
        unit: "pcs",
        rate: 30,
        amount: 150,
        disc: 0,
        d1: "0%",
        netAmount: 150,
      },
    ],
  },
  {
    no: "2",
    date: "2025-05-25",
    type: "Sales",
    party: "XYZ Mart",
    place: "Ahmedabad",
    dcNo: "1002",
    dcDate: "2025-05-29",
    items: [
      {
        itemName: "Juice Bottle",
        qty: 6,
        unit: "btl",
        rate: 60,
        amount: 360,
        disc: 0,
        d1: "5%",
        netAmount: 342,
      },
    ],
  },
 
];


export  const rows = [
    { description: "SALES", may1: "1,230.00", may25: "1,230.00", year: "0.01" },
    { description: "PURCHASE", may1: "0", may25: "0", year: "0" },
    {
      description: "RECEIPT",
      may1: "1,000.00",
      may25: "1,000.00",
      year: "0.01",
    },
    { description: "PAYMENT", may1: "0", may25: "500.00", year: "0" },
    {
      description: "EXPENSE",
      may1: "1,000.00",
      may25: "1,500.00",
      year: "0.02",
    },
    { description: "CASH BALANCE -F2", may1: "230.00", may25: "", year: "" },
    { description: "BANK BALANCE -F3", may1: "0", may25: "", year: "" },
    { description: "STOCK VALUE -F4", may1: "0", may25: "", year: "" },
    { description: "CUSTOMER BALANCE -F5", may1: "0", may25: "", year: "" },
    { description: "VENDOR BALANCE -F6", may1: "0", may25: "", year: "" },
  ];

export const Sundry = [
    {
        name:"Cash Discount",
        amount:0,
    },
    {
        name:"Labour Charges",
        amount:0,
    },
    {
        name:"Transportation",
        amount:0,
    },
    
]

export const party =[
    {
        name:"cash in hand",
        type:"bank",
    },
    {
        name:"Abc traders",
        type:"bank",
    },
   
]

export const saletype =[
    {
        name:"Cash"
    },
    {
        name:"Debit"
    },
    {
        name:"MultiMobile"
    }
]




  export const lists = [
    {
        Date: "2023-10-01",
        No: "INV001",
        Type: "Cash",
        Print: "Print",
        RefNO: "REF001",
        RefNO2: "REF002",
        Perticulars: "Sale of goods",
        Remark: "No remarks",
        Amount: "1000.00"

    },
    {
        Date: "2023-10-01",
        No: "INV001",
        Type: "Cash",
        Print: "Print",
        RefNO: "REF001",
        RefNO2: "REF002",
        Perticulars: "Sale of goods",
        Remark: "No remarks",
        Amount: "1000.00"

    },
    {
        Date: "2023-10-01",
        No: "INV001",
        Type: "Cash",
        Print: "Print",
        RefNO: "REF001",
        RefNO2: "REF002",
        Perticulars: "Sale of goods",
        Remark: "No remarks",
        Amount: "1000.00"

    },
    {
        Date: "2023-10-02",
        No: "INV002",
        Type: "Debit",
        Print: "Print",
        RefNO: "REF003",
        RefNO2: "REF004",
        Perticulars: "Purchase of goods",
        Remark: "No remarks",
        Amount: "500.00"
    },
    {
        Date: "2023-10-03",
        No: "INV003",
        Type: "MultiMobile",
        Print: "Print",
        RefNO: "REF005",
        RefNO2: "",
        Perticulars: "Service charges",
        Remark: "No remarks",
        Amount: "200.00"
    }
  ]

  export const transactions = [
  {
    date: "01/05/2025",
    vchNo: 3,
    particulars: "Agent Commission- 100 Cr Cash Discount- 100 Dr",
    amount: 100.00
  },
  {
    date: "01/05/2025",
    vchNo: 2,
    particulars: "Bank Charges- 1000 Cr Agent Commission- 500 Dr Cash Discount- 300 Dr",
    amount: 1000.00
  },
  {
    date: "01/05/2025",
    vchNo: 1,
    particulars: "Cash In Hand- 1000 Cr Agent Commission- 1000 Dr",
    amount: 1000.00
  }
];
