import "./AccountHeader.scss";
export default function AccountHeader() {
  return (
    <section className="flex-space-between account-header">
      <div>
        <a href="/daily-deals">Daily Deals</a>
        <a href="/brands-outlet">Brand Outlet</a>
        <a href="/help-contact">Help & Contact</a>
      </div>
      <div>
        <a href="/sell">Sell</a>
        <a href="/watch-list">Watchlist</a>
        <a href="/my-stuff">My Stuff</a>
      </div>
    </section>
  )
}