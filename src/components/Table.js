import moment from 'moment';
import users from '../constants/users';
import { useEffect, useState } from 'react';


const filteredUsers = users.map((user) => {
	return {
		id: user.id,
		firstName: user.firstName,
		lastName: user.lastName,
		age: user.age,
		gender: user.gender,
		email: user.email,
		phone: user.phone,
		birthDate: user.birthDate,
		image: user.image
	}
});



function BasicDataTable() {
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [tableList, setTableList] = useState(filteredUsers.slice(0, rowsPerPage));
	const [paginationCount, setPaginationCount] = useState(parseInt(filteredUsers.length / rowsPerPage));
	const [paginationNumbers, setPaginationNumbers] = useState(Array.from({ length: paginationCount }, (_, index) => index + 1));

	const updateStateValues = () => {
		const paginationCount = parseInt(filteredUsers.length / rowsPerPage);
		setTableList(filteredUsers.slice((currentPage * rowsPerPage) - rowsPerPage, rowsPerPage * currentPage))
		setPaginationCount(paginationCount);
		setPaginationNumbers(Array.from({ length: paginationCount }, (_, index) => index + 1))
	}

	useEffect(() => {
		setCurrentPage(1)
	}, [rowsPerPage]);

	useEffect(() => {
		updateStateValues();
	}, [rowsPerPage, currentPage]);

	const searchUser = (search)=>{
		if (search == "") {
			updateStateValues();
		}
		const searchFilter = filteredUsers.filter((user)=>(user.firstName).toLocaleLowerCase().includes(search.toLocaleLowerCase())||user.lastName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
		const paginationCount = parseInt(searchFilter.length / rowsPerPage);
		setTableList(searchFilter.slice((currentPage * rowsPerPage) - rowsPerPage, rowsPerPage * currentPage))
		setPaginationCount(paginationCount);
		setPaginationNumbers(Array.from({ length: paginationCount }, (_, index) => index + 1))
	}

	return (
		<div className="antialiased font-sans">
			<div className="container mx-auto px-4 sm:px-8">
				<div className="py-8">
					<div>
						<h2 className="text-2xl font-semibold leading-tight">Users overview</h2>
					</div>
					<div className="my-2 flex sm:flex-row flex-col">
						<div className="flex flex-row mb-1 sm:mb-0">
							<div className="relative">
								<select value={rowsPerPage} onChange={(eve) => setRowsPerPage(parseInt(eve.target.value))}
									className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
									<option value={5}>5</option>
									<option value={10}>10</option>
									<option value={20}>20</option>
								</select>
								<div
									className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
							{/* <div className="relative">
								<select
									className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
									<option>All</option>
									<option>Active</option>
									<option>Inactive</option>
								</select>
								<div
									className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div> */}
						</div>
						<div className="block relative">
							<span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
								<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
									<path
										d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
									</path>
								</svg>
							</span>
							<input placeholder="Search"  onChange={(e) => searchUser(e.target.value)}
								className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
						</div>
					</div>
					<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table className="min-w-full leading-normal">
								<thead>
									<tr>
										<th
											className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											PROFILE
										</th>
										<th
											className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											EMAIL
										</th>
										<th
											className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											PHONE
										</th>
										<th
											className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											AGE
										</th>
										<th
											className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											GENDER
										</th>
										<th
											className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											DOB
										</th>
									</tr>
								</thead>
								<tbody>
									{tableList.map((user) => (
										<tr key={user.id}>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<div className="flex items-center">
													<div className="flex-shrink-0 w-10 h-10">
														<img className="w-full h-full rounded-full"
															src={user.image}
															alt="" />
													</div>
													<div className="ml-3">
														<p className="text-gray-900 whitespace-no-wrap">
															{user.firstName} {user.lastName}
														</p>
													</div>
												</div>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">
													{user.phone}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">
													{user.age}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">
													{user.gender}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">
													{moment(user.birthDate).format('DD/MM/YYYY')}
												</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div
								className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
								<span className="text-xs xs:text-sm text-gray-900">
									Showing {((currentPage * rowsPerPage) - rowsPerPage) + 1} to {rowsPerPage * currentPage} of {filteredUsers.length} Entries
								</span>
								<nav aria-label="Page navigation">
									<ul className="inline-flex space-x-2">
										<li><button onClick={() => {
											if (currentPage > 1) {
												setCurrentPage(currentPage - 1)
											}
										}}
											className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
											<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
										</li>

										{paginationNumbers.map((index) => {
											if (index === currentPage) {
												return (<li><button onClick={() => setCurrentPage(index)} key={`li_${index}`} className="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full ">{index}</button></li>)
											}
											return (<li><button onClick={() => setCurrentPage(index)} key={`li_${index}`} className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">{index}</button></li>)
										})}

										<li><button onClick={() => {
											if (currentPage < paginationCount) {
												setCurrentPage(currentPage + 1)
											}
										}}
											className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
											<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicDataTable;