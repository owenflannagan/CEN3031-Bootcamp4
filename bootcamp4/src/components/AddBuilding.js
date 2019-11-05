import React from 'react';

class AddBuilding extends React.Component {
		constructor (props) {
				super(props);
				this.state = {
						name: '',
						address: '',
						latitude: '',
						longitude: '',
						code: ''
				};
		}

		handleChange(val) {
				console.log("ay");
				console.log(val.target.name);
				console.log(val.target.value);
				this.setState({[val.target.name]: val.target.value});
		}

		onSubmit(v) {
				v.preventDefault();

				const { data } = this.props;

				const fin_data = data[data.length - 1];
				const fin_id = fin_data.id;

				const building = {
						id: fin_id+1,
						name: this.state.name,
						code: this.state.code,
						address: this.state.address,
						coordinates: {
								latitude: this.state.latitude,
								longitude: this.state.longitude
						}
				}

				console.log(building);

				this.props.updateData(building);
		}

	render() {
		return (
			<form>
				<label>
					Name:
					<input name="name" value={this.state.name} onChange={val => this.handleChange(val)}/>
				</label>
				<label>
					Address:
					<input name="address" value={this.state.address} onChange={val => this.handleChange(val)}/>
				</label>
				<label>
					Code:
					<input name="code" value={this.state.code} onChange={val => this.handleChange(val)}/>
				</label>
				<label>
					Latitude:
					<input name="latitude" value={this.state.latitude} onChange={val => this.handleChange(val)}/>
				</label>
				<label>
					Longitude:
					<input name="longitude" value={this.state.longitude} onChange={val => this.handleChange(val)}/>
				</label>
				<button onClick={(v) => this.onSubmit(v)}>Send</button>
			</form>
		);
	}
}
export default AddBuilding;
