import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e) => {
    e.stopPropagation();
    setExpand(true);
    setShow({
      visible: true,
      isFolder: true,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // add logic
      setShow({ ...setShow, visible: false });
    }
  };
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>

          <div className="">
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div
          className=""
          style={{ display: expand ? "block" : "none", paddingLeft: 25 }}
        >
          {show.visible && (
            <div className="inputContainer">
              <span>{show.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                className="inputContainer_input"
                autoFocus
                onBlur={() => setShow({ ...show, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
}
export default Folder;
