import { Paperclip, SendHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { sendMessage } from '../store/messagesSlice';

function MessageInput() {
  const dispatch              = useDispatch();
  const navigate              = useNavigate();
  const { id: userToChatID }  = useParams();
  const [message, setMessage] = useState("");
  const [file, setFile]       = useState(null);

  function handleSend() {
    if (!message.trim() && !file) return;

    dispatch(sendMessage({
      id    : userToChatID,
      mess  : { text: message, image: file }
    }));

    setMessage("");
    setFile(null);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }

    if (e.key === "Escape") {
      navigate("/");
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      {file && (
        <div className="">
          <div className="avatar">
            <img src={file} className="ml-4 w-25 h-25 object-cover rounded-lg mb-2 relative" />
            <X size={20}  className='absolute top-0 right-0 bg-emerald-400 rounded-lg hover:bg-indigo-300' onClick={() => setFile("")} />
          </div>
        </div>
      )}

      <section className="bg-base-300 w-full border border-emerald-400 outline-indigo-500 rounded-xl">
        <div className="relative">
          <label className="cursor-pointer absolute top-3 left-2"><input type="file" hidden onChange={handleFileChange} />
            <Paperclip size={25} className='' />
          </label>
          <input type="text" autoComplete='off' name="message" className="w-full border-emerald-400 outline-indigo-500 rounded-xl px-10 py-3 " placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} />
          {/* <input type="file" name='file' className='top-1 left-2' /> */}
          <button type='button' disabled={!message} className={`absolute top-2 right-3 ${!message ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={handleSend}>
            <SendHorizontal size={30} className='' />
          </button>
        </div>
      </section>
    </>
  )
}

export default MessageInput;