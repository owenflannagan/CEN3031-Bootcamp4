import React from 'react';

class BuilingList extends React.Component {
	render() {
		console.log('This is my directory file', this.props.data);
		const { data } = this.props;
		const filterText = this.props.filterText;
		const filteredBuildings = data.filter(item => {
				return item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})

		const buildingList = filteredBuildings.map(directory => {
			return (
				<tr key={directory.id} onClick={this.props.selectedUpdate.bind(this, directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
