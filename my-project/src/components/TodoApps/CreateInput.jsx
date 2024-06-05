import React from "react";
import { useNavigate  } from "react-router-dom";
import Back from "./back";


class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            maxCharacters: 50,
            error: "false",
        };
        this.InputValue = this.InputValue.bind(this);
        this.HandlerSubmit = this.HandlerSubmit.bind(this);
    }
    InputValue(e) {
        const { name, value } = e.target;
        let maxCharacters = this.state.maxCharacters;
        let ReminderCharacter = maxCharacters - value.length;

        this.setState({
            [name]: value,
        });

        const ValueCharacter = document.getElementById("valueCaracter");
        ValueCharacter.innerText = `sisa karakter ${ReminderCharacter}`;

        if (name === "body" || name === "title") {
            if (ReminderCharacter < 40) {
                ReminderCharacter = 0;
                ValueCharacter.style.color = "red";
            } else {
                ValueCharacter.style.color = "black";
            }
        }
    }

    HandlerSubmit(e) {
        e.preventDefault();

        const { title, body } = this.state;
        if (title.trim() === "" || body.trim() === "") {
            alert("isi column input");
        } else {
            this.props.addContacts(this.state);
            this.setState({
                title: "",
                body: "",
            });
        }
    }
  

    render() {
        return (
            <>
                <div className="text-center">
                    <h2>Buat Catatan</h2>
                </div>
                <div className="max-w-md mx-auto mt-5  rounded-lg shadow-md sm:p-4">
                    <form
                        onSubmit={this.HandlerSubmit}
                        className="shadow-md rounded px-8 pt-6 pb-8 mb-2 p-6"
                    >
                        <div>
                            <p id="valueCaracter">
                                sisa karakter : {this.state.maxCharacters}
                            </p>
                        </div>
                        <input
                            type="text"
                            placeholder="tambahkan judul"
                            className="shadow appearance-none border rounded w-full py-2 px-2 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="title"
                            value={this.state.title}
                            onChange={this.InputValue}
                        />
                        <br />
                        <br />
                        <textarea
                            name="body"
                            cols="35"
                            rows="10"
                            className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="isi catatan kamu"
                            maxLength={this.state.maxCharacters}
                            value={this.state.body}
                            id="body"
                            onChange={this.InputValue}
                        ></textarea>
                        <br />
                        <div className="mt-2">
                            <button
                                type="submit"
                                className="bg-slate-900 text-white flex items-center hover:bg-slate-600 font-bold p-2 px-4 rounded focus:outline-none focus:shadow-outline "
                            >
                                tambahkan
                            </button>
                            <Back />
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default FormInput;
