import React from "react";
import { useForm, Controller } from "react-hook-form";

const Footer = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const validateInput = /^[^\[\]&'"]*=[^\[\]&'"]*$/;


    return (
        <div name="footer" className="h-screen md:h-screen bg-slate-200  lg:h-[800px]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full md:h-3/5">
                <div className="pb-8 md:mt-[200px] sm:h-[100px]]">
                    <p className="text-3xl  inline border-b-4 m-4">
                        Contact Me
                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
                    <div className="w-full md:w-1/2 max-w-lg">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full"
                        >
                            <div className="mb-4">
                                <label>Nama Kamu :</label>
                                <input
                                    {...register("name", {
                                        required: true,
                                        pattern: {
                                            value: validateInput,
                                            message:
                                                "Karakter yang diperbolehkan adalah '[', ']', '&', ''', atau '\"'",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.name ? "true" : "false"
                                    }
                                    className="w-full p-2 border border-gray-400 rounded focus:outline-none shadow-2xl"
                                    placeholder="Nama"
                                />
                                {errors.name?.type === "required" && (
                                    <p className="text-red-600" role="alert">
                                        Nama wajib diisi
                                    </p>
                                )}
                                {errors.name?.type === "pattern" && (
                                    <p className="text-red-600" role="alert">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    {...register("mail", {
                                        required: "Alamat email wajib diisi",
                                        pattern: {
                                            value: validateInput,
                                            message:
                                                "Karakter yang diperbolehkan adalah '[', ']', '&', ''', atau '\"'",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.mail ? "true" : "false"
                                    }
                                    className="w-full p-2 border border-gray-400 rounded focus:outline-none shadow-2xl"
                                    placeholder="Alamat Email"
                                />
                                {errors.mail && (
                                    <p className="text-red-600" role="alert">
                                        {errors.mail.message}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="pesan"
                                    id="pesan"
                                    cols="30"
                                    rows="10"
                                    {...register("pesan", {
                                        required: true,
                                        pattern: {
                                            value: validateInput,
                                            message:
                                                "Karakter yang diperbolehkan adalah '[', ']', '&', ''', atau '\"'",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.pesan ? "true" : "false"
                                    }
                                    className="w-full p-2 border border-gray-400 rounded focus:outline-none bg-sky-150 shadow-2xl"
                                    placeholder="Pesan"
                                ></textarea>
                                {errors.pesan?.type === "required" && (
                                    <p className="text-red-600" role="alert">
                                        Pesan wajib diisi
                                    </p>
                                )}
                                {errors.pesan?.type === "pattern" && (
                                    <p className="text-red-600" role="alert">
                                        {errors.pesan.message}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-600 focus:outline-none shadow-2xl"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

// className="w-full px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-600 focus:outline-none shadow-2xl"

// className="w-full p-2 border border-gray-400 rounded focus:outline-none bg-sky-150 shadow-2xl"
