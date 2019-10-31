import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { logOut } from "../store/actions/users";

const mapStateToProps = state => ({
  username: state.user ? state.user.data : ""
});

const mapDispatchToProps = {
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
