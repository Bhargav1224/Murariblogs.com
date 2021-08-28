import React from "react";
import "./Write.css";
export const Write = () => {
	return (
        <div className="write">
            <img  className="writeImg" src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput writeText"
					></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
			</form>
		</div>
	);
};
