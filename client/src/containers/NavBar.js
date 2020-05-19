import {connect} from "react-redux"
import NavBarComponent from "../components/NavBarComponent"
import {
  fetchModalClose,
  fetchModalOpenFirst,
  fetchModalOpenSecond,
  fetchAbout,
  fetchGrunwald,
  fetchNext
} from "../actions/actions"

const mapStateToProps = ({main}) => {
  return {
    isLoaded:           main.isLoaded,
    about:              main.about,
    grunwald:           main.grunwald,
    activeSelection:    main.activeSelection,
    show_first:         main.show_first,
    show_second:        main.show_second,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => {
        dispatch(fetchModalClose())
    },
    onHandleOpenModalFirst: () => {
        dispatch(fetchModalOpenFirst())
    },
    onHandleOpenModalSecond: () => {
        dispatch(fetchModalOpenSecond())
    },
    onHandleModal: () => {
        dispatch(fetchAbout())
        dispatch(fetchGrunwald())
    },
    onNextInfo: (e) => {
        dispatch(fetchNext(e.currentTarget.value))
    }
  }
}
const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
export default NavBar