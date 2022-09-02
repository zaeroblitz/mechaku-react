import Logo from "../../../assets/icons/logo.svg";

export default function TotalSpent() {
  return (
    <section className="overview-total-spent">
      <div className="header d-flex align-items-center">
        <img src={Logo} width="60" height="60" alt="" />
        <h4>Mechaku</h4>
      </div>
      <div className="value">
        <p>Total Spent</p>
        <h4>Rp. 18.921.123</h4>
      </div>
    </section>
  );
}
