"use client";

import { useState } from "react";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { Package, User, MapPin, LogOut } from "lucide-react";
import { Separator } from "@/_components/ui/separator";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const DUMMY_ORDERS = [
    {
      id: "SNT-10924",
      date: "Mar 10, 2026",
      total: "₹2,499.00",
      status: "Delivered",
    },
    {
      id: "SNT-10874",
      date: "Feb 23, 2026",
      total: "₹999.00",
      status: "Processing",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b pb-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-2">
            My Account
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome back, John Doe
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-4 md:mt-0 font-semibold uppercase tracking-widest rounded-none border-black"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="md:col-span-1 border-r pr-4 space-y-2">
          <Button
            variant="ghost"
            onClick={() => setActiveTab("orders")}
            className={`w-full justify-start text-left font-semibold uppercase tracking-widest rounded-none ${
              activeTab === "orders"
                ? "bg-black text-white hover:bg-black/90 hover:text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Package className="w-4 h-4 mr-3" />
            Order History
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("profile")}
            className={`w-full justify-start text-left font-semibold uppercase tracking-widest rounded-none ${
              activeTab === "profile"
                ? "bg-black text-white hover:bg-black/90 hover:text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <User className="w-4 h-4 mr-3" />
            Profile details
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("addresses")}
            className={`w-full justify-start text-left font-semibold uppercase tracking-widest rounded-none ${
              activeTab === "addresses"
                ? "bg-black text-white hover:bg-black/90 hover:text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <MapPin className="w-4 h-4 mr-3" />
            Addresses
          </Button>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 min-h-[400px]">
          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">
                Order History
              </h2>

              {DUMMY_ORDERS.length > 0 ? (
                <div className="overflow-x-auto border-t border-b">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="font-semibold uppercase py-4 px-4 tracking-wider text-muted-foreground">
                          Order
                        </th>
                        <th className="font-semibold uppercase py-4 px-4 tracking-wider text-muted-foreground">
                          Date
                        </th>
                        <th className="font-semibold uppercase py-4 px-4 tracking-wider text-muted-foreground">
                          Payment Status
                        </th>
                        <th className="font-semibold uppercase py-4 px-4 tracking-wider text-muted-foreground">
                          Total
                        </th>
                        <th className="font-semibold uppercase py-4 px-4 tracking-wider text-muted-foreground text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {DUMMY_ORDERS.map((order) => (
                        <tr
                          key={order.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-5 px-4 font-medium">{order.id}</td>
                          <td className="py-5 px-4 text-muted-foreground">
                            {order.date}
                          </td>
                          <td className="py-5 px-4">
                            <span
                              className={`px-3 py-1 text-xs uppercase font-semibold tracking-wider rounded ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-5 px-4 font-medium">
                            {order.total}
                          </td>
                          <td className="py-5 px-4 text-right">
                            <button className="text-black font-semibold uppercase text-xs tracking-widest underline underline-offset-4 hover:text-gray-600">
                              View Add-ons
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-gray-50 p-12 text-center rounded">
                  <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-500 uppercase tracking-widest">
                    No matching orders found.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-8 max-w-xl">
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">
                Profile Details
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                      First Name
                    </label>
                    <Input defaultValue="John" className="h-12 rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                      Last Name
                    </label>
                    <Input defaultValue="Doe" className="h-12 rounded-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <Input
                    defaultValue="john@doe.com"
                    type="email"
                    readOnly
                    className="h-12 rounded-none bg-gray-50 text-gray-500"
                  />
                </div>
                <Button className="h-12 px-8 font-bold uppercase tracking-widest rounded-none">
                  Save Changes
                </Button>
              </div>

              <Separator className="my-10" />

              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="h-12 rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                      New Password
                    </label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="h-12 rounded-none"
                    />
                  </div>
                  <Button className="h-12 px-8 font-bold uppercase tracking-widest rounded-none bg-black text-white hover:bg-gray-900">
                    Update Password
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-tight">
                  Your Addresses
                </h2>
                <Button className="font-bold uppercase tracking-widest rounded-none">
                  Add New
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border p-6 relative bg-gray-50/50 hover:border-black transition-colors cursor-pointer">
                  <div className="absolute top-6 right-6 flex space-x-3">
                    <button className="text-xs uppercase font-semibold tracking-widest text-muted-foreground hover:text-black">
                      Edit
                    </button>
                    <button className="text-xs uppercase font-semibold tracking-widest text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                  <span className="bg-black text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 mb-4 inline-block">
                    Default
                  </span>
                  <h4 className="font-semibold text-lg mb-2">John Doe</h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>123 Fashion Street, Apt 4B</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                    <p className="pt-2 font-medium">Ph: +1 234-567-890</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
