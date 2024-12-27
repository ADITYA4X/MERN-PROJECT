import { useRef, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInput = () => {
    // Check if the editor is empty
    if (editorRef.current) {
      const currentContent = editorRef.current.innerHTML;
      setDescription(currentContent);
      setIsEmpty(currentContent.trim() === "");
    }
  };

  const handleFocus = () => {
    editorRef.current?.focus();
  };

  return (
    <div className=" ">
      <Appbar />
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-[60%] ">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="text-[44px] font-bold text-gray-800 border-none outline-none mb-4 w-full font-serif"
          />

          <div
            onClick={handleFocus}
            ref={editorRef}
            contentEditable
            className="w-full border border-gray-300 p-4 min-h-[300px] rounded-md focus:outline-none text-gray-700"
            onInput={handleInput}
            suppressContentEditableWarning={true}
          >
            {isEmpty && (
              <span className="absolute text-gray-400 pointer-events-none select-none text-2xl font-serif ">
                Tell your story...
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            className="text-stone-700 hover:text-white border border-stone-700 hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mt-6 "
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};
