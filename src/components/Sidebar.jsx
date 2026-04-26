export default function Sidebar({ addnode }) {
  return (
<div
  style={{
    width: '200px',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRight: '1px solid #ccc',
  }}
>
  <h3>Components</h3>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <button onClick={() => addnode("router")}>Router</button>
    <button onClick={() => addnode("pc")}>PC</button>
    <button onClick={() => addnode("switch")}>Switch</button>
  </div>
</div>  );
}