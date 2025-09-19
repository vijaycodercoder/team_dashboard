import type { Member } from '@/data/members';
import  { members } from '@/data/members';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface State {
  originalData: Member[];
  membersData: Member[];
}

const initialState: State = {
  membersData: members,
  originalData:members
};

const BasicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    setBasicData(state, action: PayloadAction<Member[]>) {
 state.membersData = action.payload
    },
   
  },
});

export const { setBasicData, } = BasicSlice.actions;

export default BasicSlice.reducer;
