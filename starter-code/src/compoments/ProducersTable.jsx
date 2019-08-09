import React, {Component} from 'react';
import contacts from '../contacts.json'


class ProducersTable extends Component {
    state = {
        contacts: contacts.splice(0, 5)
    }

    sortNameContactsHandler = () => {
        let sortContacts = this
            .state
            .contacts
            .sort((contactA, contactB) => {
                return contactA
                    .name
                    .localeCompare(contactB.name)
            
            });
        this.setState({contacts: sortContacts});
    }

    render() {

    const celebs = this.state.contacts.map((row, i) =>(
        <tr key={i}>
          <td><img alt={row.name} src={row.pictureUrl}/></td>
          <td><h4>{row.name}</h4></td>
          <td><h4>{row.popularity}</h4></td>
        </tr>
      ));
        return (
            <div className="btn-panel">
                 <button class="oneBtn_onPanel" onClick={this.sortNameContactsHandler}>Sort By Name</button>
                 <div>
                     {celebs}
                 </div>
            </div>
        );
    }
}

export default ProducersTable;