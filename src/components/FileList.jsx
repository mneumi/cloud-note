import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import useKeyPress from "../hooks/useKeyPress";

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
	const [editFileId, setEditFileId] = useState(0);
	const [value, setValue] = useState("");
	const enterPressed = useKeyPress(13);
	const escPressed = useKeyPress(27);

	const closeSearch = () => {
		setEditFileId(0);
		setValue("");
	};

	useEffect(() => {
		if (enterPressed && editFileId) {
			const editItem = files.find((file) => file.id === editFileId);
			onSaveEdit(editItem.id, value);
			setEditFileId(0);
			setValue("");
		}
		if (escPressed && editFileId) {
			closeSearch();
		}
	}, [enterPressed, escPressed, editFileId]);

	return (
		<ul className="list-group list-group-flush file-list">
			{files.map((file) => (
				<li
					className="list-group-item bg-light row d-flex align-items-center file-item"
					key={file.id}
				>
					{file.id !== editFileId && (
						<>
							<span className="col-2">
								<FontAwesomeIcon
									title="markdown-icon"
									size="lg"
									icon={faMarkdown}
								/>
							</span>
							<span
								className="col-8 c-link"
								onClick={() => onFileClick(file.id)}
							>
								{file.title}
							</span>
							<button
								type="button"
								className="icon-button col-1"
								onClick={() => {
									setEditFileId(file.id);
									setValue(file.title);
								}}
							>
								<FontAwesomeIcon title="编辑" size="lg" icon={faEdit} />
							</button>
							<button
								type="button"
								className="icon-button col-1"
								onClick={() => {
									onFileDelete(file.id);
								}}
							>
								<FontAwesomeIcon title="删除" size="lg" icon={faTrash} />
							</button>
						</>
					)}
					{file.id === editFileId && (
						<>
							<input
								className="form-control col-11"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
							<button
								type="button"
								className="icon-button col-1"
								onClick={closeSearch}
							>
								<FontAwesomeIcon title="关闭" size="lg" icon={faTimes} />
							</button>
						</>
					)}
				</li>
			))}
		</ul>
	);
};

FileList.propTypes = {
	files: PropTypes.array,
	onFileClick: PropTypes.func,
	onFileDelete: PropTypes.func,
	onSaveEdit: PropTypes.func,
};

export default FileList;
