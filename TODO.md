# TODO: Replace Courses with Batches in Grade.jsx

- [ ] Update state variables: Change `courses` to `batches`, `setCourses` to `setBatches`
- [ ] Update fetch function: Rename `fetchCourses` to `fetchBatches`, change API endpoint to "/batches"
- [ ] Update useEffect: Call `fetchBatches` instead of `fetchCourses`
- [ ] Update filter logic: Change `courseFilter` to `batchFilter`, update filtering to use batches
- [ ] Update UI: Change course dropdown to batch dropdown, update table display to show batch info
- [ ] Update form: Change courseId select to batchId, update labels and options
- [ ] Ensure all references to courses are replaced with batches for full CRUD functionality
