import React from "react";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import ButtonBtn from "./components/ButtonBtn";
import defaultFiles from "./utils/defaultFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
	return (
		<div className="App container-fluid px-0">
			<div className="row no-gutters">
				<div className="col bg-light left-panel">
					<FileSearch
						title="我的云文档"
						onFileSearch={(value) => {
							console.log(value);
						}}
					/>
					<FileList
						files={defaultFiles}
						onFileClick={(id) => console.log(id)}
						onFileDelete={(id) => console.log("deleting", id)}
						onSaveEdit={(id, newValue) => console.log(id, newValue)}
					/>
					<div className="row no-gutters">
						<div className="col">
							<ButtonBtn text="新建" colorClass="btn-primary" icon={faPlus} />
						</div>
						<div className="col">
							<ButtonBtn
								text="导入"
								colorClass="btn-success"
								icon={faFileImport}
							/>
						</div>
					</div>
				</div>
				<div className="col bg-primary right-panel">
					<h1>this is the right</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
