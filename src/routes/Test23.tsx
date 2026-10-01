// Test23 (e.target vs e.currentTarget)
// Source: (Claude, https://claude.ai/chat/6048cfea-6d46-4a30-973b-ef16408b8919)

export default function Test23() {
  function handleClick(e) {
    console.log('target:', e.target.tagName);
    console.log('currentTarget:', e.currentTarget.tagName);
  }

  return (
    <button onClick={handleClick} style={{ padding: 16 }}>
      <span style={{ background: 'yellow' }}>Save</span>
    </button>
  );
}