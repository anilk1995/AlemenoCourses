const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allCourses: [],
  isLoading: false,
  filteredData: [],
  searchQuery: "",
};

const dataSlice = createSlice({
  name: "allCourses",
  initialState,
  reducers: {
    settingData(state, action) {
      state.allCourses = action.payload;
      state.isLoading = false;
    },
    filterData(state, action) {
      if (state.allCourses.length !== 0)
        state.filteredData =
          action.payload === ""
            ? state.allCourses
            : state.allCourses.filter(
                (course) =>
                  course.name
                    .toLowerCase()
                    .includes(action.payload.toLowerCase()) ||
                  course.instructor
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
              );
    },
    loadingData(state, action) {
      state.isLoading = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { filterData, loadingData, setSearchQuery, settingData } =
  dataSlice.actions;
