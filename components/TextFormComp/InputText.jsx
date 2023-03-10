import React from 'react';

const InputText = () => {
  return (
    <div className="flex flex-col items-center w-full px-5 py-8 justify-center gap-5">
			<h1 className="font-heading font-semibold text-lg">
				Add Original Content
			</h1>
			<textarea
				rows={8}
				className="bg-light-primary rounded-md p-5 w-[90%] sm:w-[80%] flex-wrap text-black"
				placeholder="Add your content here"
				name="text"
				type="text"
				onChange={handleChange}
			/>
			<div className="w-full flex gap-2 justify-center items-center">
				<button
					className="font-heading border-x-custom-gradient-start border-2 border-y-custom-gradient-end text-transparent bg-clip-text bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end bg-white rounded-md text-sm sm:text-lg px-2 py-1 sm:px-5 sm:py-2 hover:scale-110 transition-all"
					onClick={onPrev}
				>
					Back
				</button>
				<button
					className="font-heading text-white bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end rounded-md px-2 py-1 sm:px-5 sm:py-2 text-sm sm:text-lg hover:scale-110 transition-all"
					onClick={handleSubmit}
				>
					Next
				</button>
			</div>
			 <label
          className={`flex justify-center w-full h-[250px] sm:h-[300px] px-4 transition bg-${theme}-primary border-2 border-gray-500 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-300 focus:outline-none`}
        >
          <span className="flex flex-col items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 sm:w-16 h-10 sm:h-16 text-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className={`text-sm sm:text-md font-medium text-content text-center`}>
              Drop files to Attach, <br /> or
              <span className="text-blue-600 underline ml-2">browse</span>
              <br />
            </span>
            <span className={`text-xs sm:text-sm font-medium text-gray-500 text-center`}>
              Supports .mp3, .ogg, .wav, .flac
            </span>
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            onChange={(e) => {
              handleFile(e);
            }}
          />
        </label>
		<button onClick={handleFileUpload}>Upload</button>
		<div
              className={`w-full flex flex-col justify-center px-1 py-5 sm:p-5 rounded-lg`}
            >
              <div className='mt-1 flex flex-row items-center justify-center px-3 sm:px-5'>
                <div className='w-full flex flex-col justify-center'>
                  <div className="flex flex-row items-center justify-between">
                <p className="text-content truncate w-[60%] text-sm sm:text-md">{fileName}</p>
                <p className="italic text-content text-xs sm:text-sm text-right">{progressText}</p>
              </div>
              {uploadProgress > 0 && (
                <div className="my-2 w-full h-2 bg-gray-300 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              )}
              <div>
                <p className="text-content text-xs"> {fileInMb}</p>
              </div>
                </div>
              </div>
            </div>
		</div>
  );
}

export default InputText;
