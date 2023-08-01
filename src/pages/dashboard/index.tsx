import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Sidebar */}
      <aside className="bg-white p-4 w-64 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          <li className="text-blue-600 font-medium">Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          {/* Add more projects */}
        </ul>
      </aside>
      <main className="my-4 flex flex-col gap-4">
        {/* Project Details and Summary */}
        <section className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Project 1</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Status:</span>
            <span className="px-2 py-1 rounded-lg bg-blue-500 text-white text-sm">
              In Progress
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Start Date:</span>
            <span>2023-07-30</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">End Date:</span>
            <span>2023-08-15</span>
          </div>
        </section>
        {/* Task Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">To Do</h2>
            <div className="space-y-2">
              <div className="bg-gray-200 p-2 rounded-lg">
                <h3 className="text-lg font-semibold">Task 1</h3>
                <p className="text-gray-500">Task description goes here.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Due Date: 2023-08-10</span>
                  <button className="px-2 py-1 rounded-lg bg-blue-500 text-white text-sm">
                    Start
                  </button>
                </div>
              </div>
              {/* Add more To Do tasks */}
            </div>
          </div>
          <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">In Progress</h2>
            <div className="space-y-2">
              <div className="bg-yellow-200 p-2 rounded-lg">
                <h3 className="text-lg font-semibold">Task 2</h3>
                <p className="text-gray-500">Task description goes here.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Due Date: 2023-08-12</span>
                  <button className="px-2 py-1 rounded-lg bg-blue-500 text-white text-sm">
                    Complete
                  </button>
                </div>
              </div>
              {/* Add more In Progress tasks */}
            </div>
          </div>
          <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Done</h2>
            <div className="space-y-2">
              <div className="bg-green-200 p-2 rounded-lg">
                <h3 className="text-lg font-semibold">Task 3</h3>
                <p className="text-gray-500">Task description goes here.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Due Date: 2023-08-08</span>
                  <span className="px-2 py-1 rounded-lg bg-green-500 text-white text-sm">
                    Completed
                  </span>
                </div>
              </div>
              {/* Add more Done tasks */}
            </div>
          </div>
        </section>
        {/* Create New Task Form */}
        <section className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="title">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border-gray-300 border rounded-lg p-2"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="description">
                Task Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full border-gray-300 border rounded-lg p-2 resize-none"
                placeholder="Enter task description"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="dueDate">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="w-full border-gray-300 border rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white text-sm"
            >
              Create Task
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Dashboard;
