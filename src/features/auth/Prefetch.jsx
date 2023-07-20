// import { faSubscript } from "@fortawesome/free-solid-svg-icons";
import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    console.log("prefetching, subscribing to data");
    store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }));
    //thats why data not disapearing after default 60 sec
  },[]);

  return <Outlet />;
};
export default Prefetch;
