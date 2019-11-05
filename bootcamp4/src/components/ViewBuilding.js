import React from 'react';

class ViewBuilding extends React.Component {
	render() {
			const building_id = this.props.selectedBuilding;
			const { data } = this.props;

			let name = "";
			let code = "";
			let coors = "";
			let address = "";

			console.log("====");
			console.log(data);
			const this_building_list = data.filter(item => {
					return (item.id === building_id);
			});
			const this_building = this_building_list[0];

			if (typeof this_building !== "undefined") {
					console.log(this_building);
					console.log(this_building_list);

					if (typeof this_building.coordinates === "undefined") {
							coors = "N/A";
					} else {
							coors = "( " + this_building.coordinates.latitude + " , " + this_building.coordinates.longitude + " )";
					}
					code = this_building.code;
					name = this_building.name;
					address = this_building.address;
			}
			console.log(name);
			console.log(code);
			console.log(address);


		return (
			<div>
				<p>
					<i>Click on a name to view more information</i>
					<ul>
						<li>Code: {code}</li>
						<li>Name: {name}</li>
						<li>Coordinates: {coors}</li>
						<li>Address: {address}</li>
					</ul>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
