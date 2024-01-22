import React from "react";
import "./index.css";
import Phonebook from "./components/Phonebook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: "",
    };
  }

  componentDidMount() {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    } else {
      // Ustawienie domyślnych kontaktów, jeśli localStorage jest pusty..
      this.setState({
        contacts: [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
      });
    }
  }
  

 componentDidUpdate(prevProps, prevState) {
  if (JSON.stringify(prevState.contacts) !== JSON.stringify(this.state.contacts)) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
}


  handleSubmit = (newContact) => {
    const isContactInTheList = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isContactInTheList) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert("Contact with the same name already exists!");
    }
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };
  

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Phonebook
          contacts={contacts}
          filteredContacts={filteredContacts}
          filter={filter}
          onFilterChange={this.handleFilter}
          onSubmit={this.handleSubmit}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
