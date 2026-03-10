"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  ShoppingBag,
  Settings,
  Store,
  Tag,
  CheckCircle,
  XCircle,
  MoreVertical,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("analytics");

  const DUMMY_ANALYTICS = [
    {
      label: "Total Revenue",
      value: "₹1,24,500",
      change: "+12.5%",
      positive: true,
    },
    { label: "Active Vendors", value: "45", change: "+3", positive: true },
    { label: "Total Orders", value: "1,204", change: "+8.2%", positive: true },
    {
      label: "Avg. Order Value",
      value: "₹2,150",
      change: "-2.1%",
      positive: false,
    },
  ];

  const DUMMY_VENDORS = [
    {
      id: "V-993",
      name: "Urban Trends",
      status: "Pending",
      email: "contact@urbantrends.com",
    },
    {
      id: "V-994",
      name: "StreetWear Co",
      status: "Active",
      email: "hello@streetwear.com",
    },
    {
      id: "V-995",
      name: "Premium Knits",
      status: "Pending",
      email: "sales@premiumknits.com",
    },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-gray-50/50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white p-6 hidden md:block space-y-8">
        <h2 className="font-bold uppercase tracking-widest text-lg">
          Admin Portal
        </h2>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider text-xs ${
              activeTab === "analytics"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Platform Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab("vendors")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider text-xs ${
              activeTab === "vendors"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Vendors</span>
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider text-xs ${
              activeTab === "products"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Products</span>
          </button>
          <button
            onClick={() => setActiveTab("coupons")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider text-xs ${
              activeTab === "coupons"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Coupons</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-3 w-full p-3 rounded font-semibold uppercase tracking-wider text-xs ${
              activeTab === "settings"
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-gray-100"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tight">
              {activeTab === "analytics" && "Platform Overview"}
              {activeTab === "vendors" && "Vendor Management"}
              {activeTab === "products" && "Product Moderation"}
              {activeTab === "coupons" && "Coupon Campaigns"}
              {activeTab === "settings" && "Platform Settings"}
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage all ecosystem activities from here.
            </p>
          </div>
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
                    <span
                      className={`text-sm font-medium ${stat.positive ? "text-green-600" : "text-red-600"}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm min-h-[400px]">
              <h3 className="text-xl font-bold uppercase tracking-widest border-b pb-4 mb-6">
                Recent Sales Trend
              </h3>
              <div className="h-64 flex items-center justify-center text-muted-foreground bg-gray-50 rounded border border-dashed">
                Chart Placeholder
              </div>
            </div>
          </div>
        )}

        {activeTab === "vendors" && (
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Pending Approvals
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white border-b">
                  <tr>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                      ID
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                      Vendor Name
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground">
                      Status
                    </th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-muted-foreground text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {DUMMY_VENDORS.map((vendor) => (
                    <tr
                      key={vendor.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium">{vendor.id}</td>
                      <td className="py-4 px-6">{vendor.name}</td>
                      <td className="py-4 px-6 text-muted-foreground">
                        {vendor.email}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full ${
                            vendor.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 flex justify-end gap-2">
                        {vendor.status === "Pending" && (
                          <>
                            <button className="text-green-600 hover:bg-green-50 p-2 rounded">
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button className="text-red-500 hover:bg-red-50 p-2 rounded">
                              <XCircle className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        <button className="text-gray-400 hover:text-black p-2 rounded ml-2">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeTab === "products" ||
          activeTab === "coupons" ||
          activeTab === "settings") && (
          <div className="flex flex-col items-center justify-center p-24 text-center border-2 border-dashed rounded-lg bg-gray-50/50">
            <Settings className="w-16 h-16 text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">
              Module in Progress
            </h2>
            <p className="text-muted-foreground max-w-md">
              This administration module is currently under development. Please
              check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
