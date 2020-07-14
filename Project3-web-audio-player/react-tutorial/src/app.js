import React, { Component } from "react";

const PlayListHeader = () => {
	triggerUpload = () => {

	};

	return (
		<div className="card-header bg-dark d-flex justify-content-between bg-dark">
			<h5 className="card-title mb-0">Playlist</h5>
			<img
				src="https://res.cloudinary.com/jiroghene/image/upload/v1594087195/xplayer/upload_jwas1o.png"
				id="upload"
				height="22"
				width="22"
				class="align-middle"
				onClick={}
			/>
		</div>
	);
};

const PlayListBody = () => {
	return (
		<div className="card-body px-2" style={{ backgroundColor: "#000000c4" }}>
			<div id="no_song" className="text-center">
				<h6 className="lead">No song found</h6>
				<p className="card-text">
					Add songs to your playlist by clicking on the upload icon
				</p>
			</div>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<div id="wrapper" className="position-absolute h-100 w-100">
				<main className="mt-5">
					<div className="col-sm-8 mx-auto">
						<div className="card bg-dark text-light">
							<PlayListHeader />
							<PlayListBody />
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
