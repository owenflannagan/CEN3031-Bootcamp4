import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
	  data: this.props.data
    };
  }

  filterUpdate(value) {
		  this.setState({filterText: value});
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
		  console.log("CALLED")
		  console.log(id)
		  this.setState({selectedBuilding: id});
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

		updateData(building) {
				let local_data = this.state.data;
				local_data.push(building);
				this.setState({data: local_data});
		}

		removeData(building_id) {
				let local_data = this.state.data;
				local_data.splice(building_id, 1);
				this.setState({data: local_data});
		}

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
					selectedUpdate={this.selectedUpdate.bind(this)}
					filterText={this.state.filterText}
                    data={this.state.data}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
					selectedBuilding={this.state.selectedBuilding}
					data={this.state.data}
				/>
			  <RemoveBuilding
				selectedBuilding={this.state.selectedBuilding}
				removeData={this.removeData.bind(this)}
				data={this.state.data}
			  />
            </div>
          </div>
		  <div className="row">
		    <h2>Add Building</h2>
		    <AddBuilding
			    updateData={this.updateData.bind(this)}
			    data={this.state.data}
		    />
		  </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
