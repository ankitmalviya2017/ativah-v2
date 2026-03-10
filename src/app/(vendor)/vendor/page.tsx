"use client";

import { useState } from "react";
import {
  BarChart3,
  Package,
  ShoppingCart,
  PlusCircle,
  FileText,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import { Input } from "@/_components/ui/input";
import { Button } from "@/_components/ui/button";

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("analytics");

  const DUMMY_ANALYTICS = [
    { label: "Today's Sales", value: "₹8,499", increase: "+14%" },
    { label: "Pending Orders", value: "12", increase: "-2" },
    { label: "Low Stock Items", value: "5", increase: "+3" },
    { label: "Total Products", value: "84", increase: "+12%" },
  ];

  const DUMMY_PRODUCTS = [
    {
      id: "PRD-001",
      name: "Classic Navy Chinos",
      sku: "CN-01-M",
      price: "₹1,499",
      stock: 45,
    },
    {
      id: "PRD-002",
      name: "White Linen Shirt",
      sku: "WL-02-L",
      price: "₹1,299",
      stock: 12,
    },
    {
      id: "PRD-003",
      name: "Olive Green Cargo Pants",
      sku: "OC-03-M",
      price: "₹1,699",
      stock: 4,
    },
  ];

  const DUMMY_ORDERS = [
    {
      id: "ORD-9912",
      customer: "Alice Smith",
      date: "Today, 10:42 AM",
      amount: "₹1,499",
      status: "Processing",
    },
    {
      id: "ORD-9911",
      customer: "Bob Johnson",
      date: "Yesterday, 4:15 PM",
      amount: "₹2,998",
      status: "Shipped",
    },
    {
      id: "ORD-9910",
      customer: "Charlie Brown",
      date: "Mar 08, 1:20 PM",
      amount: "₹1,299",
      status: "Delivered",
    },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-gray-50/50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white p-6 hidden md:block space-y-8">
        <h2 className="font-bold uppercase tracking-widest text-lg">
          Vendor Hub
        </h2>

        <nav className="space-y-2 text-sm">
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider ${
              activeTab === "analytics"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider ${
              activeTab === "products"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Products</span>
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider ${
              activeTab === "orders"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Orders</span>
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider ${
              activeTab === "inventory"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Inventory</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {activeTab === "analytics" && "Store Overview"}
            {activeTab === "products" && "Product Catalog"}
            {activeTab === "orders" && "Order Management"}
            {activeTab === "inventory" && "Inventory Control"}
          </h1>
        </header>

        {activeTab === "analytics" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DUMMY_ANALYTICS.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg border shadow-sm flex flex-col justify-between"
                >
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    {stat.label}
                  </span>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <span className="text-sm font-medium text-gray-500">
                      {stat.increase}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm min-h-[400px]">
                <h3 className="text-lg font-bold uppercase tracking-widest border-b pb-4 mb-6">
                  Recent Orders
                </h3>
                <div className="space-y-4">
                  {DUMMY_ORDERS.map((order) => (
                    <div
                      key={order.id}
                      className="flex justify-between items-center py-3 border-b border-dashed last:border-0 text-sm"
                    >
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-muted-foreground">
                          {order.customer}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{order.amount}</p>
                        <span
                          className={`text-[10px] uppercase font-bold tracking-widest ${
                            order.status === "Processing"
                              ? "text-orange-500"
                              : order.status === "Shipped"
                                ? "text-blue-500"
                                : "text-green-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border shadow-sm min-h-[400px]">
                <h3 className="text-lg font-bold uppercase tracking-widest border-b pb-4 mb-6">
                  Low Stock Alerts
                </h3>
                <div className="space-y-4">
                  {DUMMY_PRODUCTS.filter((p) => p.stock < 15).map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between items-center py-3 border-b border-dashed last:border-0 text-sm"
                    >
                      <div>
                        <p className="font-semibold line-clamp-1">
                          {product.name}
                        </p>
                        <p className="text-muted-foreground">{product.sku}</p>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <span
                          className={`font-bold ${product.stock < 5 ? "text-red-500" : "text-orange-500"}`}
                        >
                          {product.stock} left
                        </span>
                        <button className="text-xs uppercase font-bold tracking-widest text-blue-600 hover:text-blue-800">
                          Restock
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    className="pl-9 rounded-none h-11"
                  />
                </div>
                <Button variant="outline" className="rounded-none h-11 px-4">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Button className="rounded-none h-11 px-8 font-bold uppercase tracking-widest bg-black text-white hover:bg-gray-900">
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50/50 border-b">
                    <tr>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                        Product Details
                      </th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                        SKU
                      </th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                        Price
                      </th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                        Stock
                      </th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {DUMMY_PRODUCTS.map((product) => (
                      <tr
                        key={product.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6 font-medium">
                          <p>{product.name}</p>
                          <p className="text-xs text-muted-foreground font-normal mt-1">
                            {product.id}
                          </p>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">
                          {product.sku}
                        </td>
                        <td className="py-4 px-6 font-medium">
                          {product.price}
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full ${
                              product.stock > 20
                                ? "bg-green-100 text-green-800"
                                : product.stock > 5
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.stock} in stock
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button className="text-blue-600 font-semibold uppercase text-xs tracking-widest hover:underline mr-4">
                            Edit
                          </button>
                          <button className="text-gray-400 hover:text-black mt-1">
                            <MoreHorizontal className="w-4 h-4 inline-block" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {(activeTab === "orders" || activeTab === "inventory") && (
          <div className="flex flex-col items-center justify-center p-24 text-center border-2 border-dashed rounded-lg bg-gray-50/50">
            <Package className="w-16 h-16 text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">
              Module coming soon
            </h2>
            <p className="text-muted-foreground max-w-md">
              Detailed order tracking and inventory syncing are being
              implemented.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
