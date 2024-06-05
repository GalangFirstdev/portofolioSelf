import React from "react";
import { IoSearch } from "react-icons/io5";

class InputSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactUser: [],
            SearchQuery: "",
            contact: "",
            isModalOpen: false,
        };
        this.handleButton = this.handleButton.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        this.setState({
            SearchQuery: e.target.value,
        });
    }

    toggleModal(prevState) {
        this.setState({
            isModalOpen:
                !prevState.isModalOpen /* mengembalikan nilai modal menjadi true */,
        });
    }

    handleButton() {
        /* reset nilai dari input search */
        this.props.onSearch(this.state.SearchQuery);
        this.setState({ SearchQuery: "", isModalOpen: false });
    }

    render() {
        return (
            <div className="flex justify-start mb-8 fixed top-8 rounded-full blur-7 w-1/7">
                <div className="w-[100px] rounded-full flex mr-4">
                    <IoSearch
                        onClick={this.toggleModal}
                        className="w-[100px] m-2 flex"
                    />
                </div>
                {this.state.isModalOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white-100 p-4 rounded-lg">
                            {/* create input search   */}
                            <input
                                type="text"
                                placeholder="silahkan cari Todo anda"
                                className="border rounded-full p-5 bg-white"
                                value={this.state.SearchQuery}
                                onChange={this.handleSearch}
                            />
                            <div className="flex py-5 p-2 lg:w-[400px] xl:w-[500px]">
                                <button
                                    className="bg-gray-100 w-full p-3 m-5 rounded-full"
                                    onClick={() => this.handleButton()}
                                >
                                    cari todo anda
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default InputSearch;
