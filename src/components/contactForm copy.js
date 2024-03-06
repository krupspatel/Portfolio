import React, { useState, useEffect } from 'react';

export default function ContactForm() {

    const useSubmitForm = (url, data, fields) => {
        const [status, setStatus] = useState("idle");
        const [responseData, setData] = useState([]);

        const fetchData = async (formData) => {
            setStatus("fetching");

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        Accept: "text/html",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                setData(data);
                setStatus("fetched");
            } catch (err) {
                setData(err);
                setStatus("failed");
            }
        };

        const onSubmit = (e) => {
            e.preventDefault();

            const formData = fields.reduce(
                (formData, field) => ({
                    ...formData,
                    [field]: e.target[field].value
                }),
                {}
            );
            fetchData(formData);
        };

        return [onSubmit, status, responseData];
    };

    const [fields, setFields] = useState({ // <-- create field state
        email: '',
        username: '',
    });
    const [fetchData, status, data] = useSubmitForm(
        "https://myurl-me/",
        // someData
    );

    useEffect(() => {
        // handle successful/failed fetch status and data/error
    }, [status, data]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFields((fields) => ({
            ...fields,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        // e.preventDefault();
        fetchData(fields); // <-- invoke hook fetchData function
    };
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <h3 className="text-3xl font-bold tracking-tight text-white">Let's Connect, Make things happen.</h3>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={(e) => submitHandler(e)}>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="name" class="block text-sm font-medium leading-6 ">Name</label>
                        </div>
                        <div class="mt-2">
                            <input
                                name="username"
                                placeholder="name"
                                onChange={changeHandler}
                                value={fields.username}
                                autocomplete="name" required class="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="email" class="block text-sm font-medium leading-6 ">Email address</label>
                        </div>
                        <div class="mt-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                onChange={changeHandler}  // <-- attach change handler
                                value={fields.email}
                                autocomplete="email" required class="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="message" class="block text-sm font-medium leading-6 ">Message</label>
                        </div>
                        <div class="mt-2">
                            <textarea id="message" name="message" rows="3" class="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
