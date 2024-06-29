'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Page = () => {
    const { data: session } = useSession();
    const [bookings, setBookings] = useState([]);

    const loadData = async () => {
        if (session?.user?.email) {
            try {
                const resp = await fetch(
                    `http://localhost:3000/my-bookings/api/${session.user.email}`
                );
                const data = await resp.json();
                setBookings(data.myBookings || []);
            } catch (error) {
                console.error('Error loading data:', error);
                toast.error('Failed to load bookings.');
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            const resp = await fetch(
                `http://localhost:3000/my-bookings/api/delete/${id}`, {
                    method: 'DELETE',
                }
            );
            if (resp.ok) {
                const data = await resp.json();
                if (data?.response?.deletedCount > 0) {
                    toast.success(data?.message || 'Deleted successfully');
                    loadData();
                } else {
                    toast.error('Failed to delete booking.');
                }
            } else {
                toast.error('Failed to delete booking.');
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
            toast.error('Failed to delete booking.');
        }
    };

    useEffect(() => {
        loadData();
    }, [session]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative h-72 mb-12">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src="/assets/images/about_us/parts.jpg"
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-white text-4xl font-bold">My Bookings</h1>
                </div>
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-100 p-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-orange-600 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Service Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Booking Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {bookings.map(({ serviceTitle, _id, date, price }, index) => (
                            <tr key={_id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-sm  text-gray-900">{index + 1}</td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-sm text-gray-900">{serviceTitle}</td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-sm text-gray-900">{price}</td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-sm text-gray-900">{date}</td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-sm ">
                                    <div className="flex space-x-2">
                                        <Link href={`/my-bookings/update/${_id}`}>
                                            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150">
                                                <FaEdit className="mr-1" /> Edit
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(_id)}
                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
                                        >
                                            <FaTrashAlt className="mr-1" /> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
