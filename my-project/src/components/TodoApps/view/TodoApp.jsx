import React, { useEffect } from "react";
import FormInput from "../CreateInput";
import InputSearch from "../InputSearch";
import { dataGet } from "../utils/data";
import ReactContactList from "../ReactContactList";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";








class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactUser: [],
            // didmount: dataGet(),
            SearchQuery: "",
            Contact: "",
        };
        this.onHandlerDeleteButton = this.onHandlerDeleteButton.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.onHandlerInput = this.onHandlerInput.bind(this);
    }



    componentDidMount() {
        const contacts = dataGet();
        this.setState({ contactUser: contacts });
    }

    onHandlerDeleteButton(id) {
        const DeleteBUtton = this.state.contactUser.filter(
            (contact) => contact.id !== id
        );
        this.setState({
            contactUser: DeleteBUtton,
            contact: DeleteBUtton.length === 0 ? "notfound" : "idle",
        });
    }
    onSearchHandler(query) {
        const filterData = this.state.contactUser.filter((dataValue) =>
            dataValue.title.toLowerCase().includes(query.toLowerCase())
        );
        this.setState({
            contactUser: filterData,
            contact: filterData.length === 0 ? "notfound" : "idle",
        });
    }

    handleReset() {
        const DataMount = dataGet();
        this.setState({
            contactUser: DataMount,
            contact: "idle",
        });
    }

    onHandlerInput({ title, body }) {
        const AddContact = {
            id: +new Date(),
            title: title,
            body: body,
            archive: false,
            createdArt: +new Date().getTime(),
        };
        this.setState(
            (prev) => ({
                contactUser: [...prev.contactUser, AddContact],
            }),
            () =>
                setTimeout(() => {
                    alert("data sudah di tambahkan");
                }, 0)
        );
    }

    render() {
       
        const { contact } = this.state;
        return (
            <div>
                <div>
                    <InputSearch onSearch={this.onSearchHandler} />
                </div>
                <FormInput addContacts={this.onHandlerInput} />
                <h3 className="text-center text-xl mt-4">Catatan Aktif</h3>
                {contact === "notfound" ? (
                    <p className="text-center">Tidak ada catatan</p>
                ) : (
                    <ReactContactList
                        contact={this.state.contactUser}
                        onDelete={this.onHandlerDeleteButton}
                    />
                )}
                <div className="flex justify-center mt-4">
                    <button onClick={() => this.handleReset()}>refresh</button>
                </div>
            </div>
        );
    }
}

export default TodoApp;
