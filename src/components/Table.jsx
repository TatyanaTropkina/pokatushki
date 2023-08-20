import { useState } from 'react';

function Table(props) {

	const [zoomedId, setZoomedId] = useState(null);

	const toggleZoom = (id) => {
	  if (zoomedId === id) {
		setZoomedId(null);
	  } else {
		setZoomedId(id);
	  }
	};
	
	const rows = props.state.map((d) => (
	  <tr key={d.id}>
		<td className="tableSeil">{d.id}</td>
		<td className="tableSeil">{d.path}</td>
		<td className="tableSeil seilImg"> 
			<img
					className={`tableImg ${zoomedId === d.id ? 'tableImgZoomed' : ''}`}
					onClick={() => toggleZoom(d.id)}
					src={d.screenshot}
					alt=""
					/>
			</td>
		<td className="tableSeil"><a href={d.track} target='_blank'>Открыть</a></td>
		<td className="tableSeil">{d.distance}</td>
		<td className="tableSeil">{d.station}</td>
		<td className="tableSeil">{d.there[0].time}</td>
		<td className="tableSeil">{d.there[0].coast}</td>
		<td className="tableSeil">{d.back[0].time}</td>
		<td className="tableSeil">{d.back[0].coast}</td>
		<td className="tableSeil">{d.comments}</td>
	  </tr>
	));
  
	return (
	  <table className="table">
		<thead >
		  <tr className="tableHead">
			
			
				<th className="tableSeil" rowSpan={2}>№</th>
				<th className="tableSeil" rowSpan={2}>Маршрут</th>
				<th className="tableSeil" rowSpan={2}>Скриншот</th>
				<th className="tableSeil" rowSpan={2}>Трек</th>
				<th className="tableSeil" rowSpan={2}>Км</th>
				<th className="tableSeil" rowSpan={2}>Станция</th>
				<th className="tableSeil" colSpan={2}>Туда</th>
				<th className="tableSeil" colSpan={2}>Обратно</th>
				<th className="tableSeil" rowSpan={2}>Комментарии</th>
         
         
		  </tr>
		  <tr>
            <th className="tableSeil">Время</th>
            <th className="tableSeil">Стоимость</th>
            <th className="tableSeil">Время</th>
            <th className="tableSeil">Стоимость</th>
          </tr>
		</thead>
		<tbody>
		  {rows}
		</tbody>
	  </table>
	);
  }
  
  export default Table;
  