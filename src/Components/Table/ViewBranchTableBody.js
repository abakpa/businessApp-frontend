const Tablebody = ({ branches }) => {
    const filteredBranches = branches.filter(
      (branch) => branch.name !== "Head office"
    );
  
    return (
      <tbody className="text-sm">
        {filteredBranches.map((branch, index) => (
          <tr key={index} className="border-b">
            <td className="border border-gray-300 p-2">{branch.name}</td>
            <td className="border border-gray-300 p-2">{branch.location}</td>
            <td className="border border-gray-300 p-2">{branch.phone}</td>
          
          </tr>
        ))}
      </tbody>
    );
  };
  
  export default Tablebody;
  