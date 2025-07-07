import React, {useEffect,useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { fetchBranchRequest } from "../Redux/slices/branchSlice";
import { Link } from "react-router-dom";
import Tablebody from "./Table/ViewBranchTableBody";
import Tablehead from "./Table/ViewBranchTableHead";

const ViewBranch = ({ onEdit, onDelete, onBack }) => {
    const dispatch = useDispatch()
    const {loading,branch,error} = useSelector((state)=>state.branch)
     const [searchTerm, setSearchTerm] = useState("");
    const businessId = localStorage.getItem("businessId");
    useEffect(()=>{
        dispatch(fetchBranchRequest(businessId))
    },[dispatch,businessId])
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const filteredBranches = branch.filter((branch) =>
        branch.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <svg
                  className="animate-spin h-10 w-10 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Loading"
              >
                  <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                  />
                  <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      className="opacity-75"
                  />
              </svg>
              <p className="text-blue-500 ml-4">Loading branches...</p>
          </div>
      );
  }
  if(error)return <p>Error: {error}</p>
  return (
    <div className="flex flex-col p-6  mt-10">
      <h2 className=" text-xl font-bold mb-4 text-center">Branches</h2>
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search branch..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md"
        />
         <Link to="/createbranch" className="text-xs">
        <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create Branch
        </button>
        </Link>
      </div>
      <table className="w-full border-collapse border border-gray-300">
          <Tablehead />
          <Tablebody branches={filteredBranches} />
        </table>
    </div>
  );
};

export default ViewBranch;