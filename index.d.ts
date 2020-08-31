type TColorPropButton = {
  font: string;
  main: string;
  hover?: string;
};

type TNavItem = {
  title: string;
  toLink: string;
  current: boolean;
};

// Medicine and date Types structure

type TMedicine = {
  nameMedicine: string;
  timesPerDay: string;
  daysToTake: number;
};

type TPrescription = {
  description: string;
  symptoms: string[];
};

type TRecepy = {
  medicine: TMedicine[];
  prescription: TPrescription;
  endTreatment: Date | string;
};

type TDate = {
  _id: string;
  clientName: string;
  clientId: string;
  doctorName: string;
  doctorId: string;
  active: boolean;
  date: Date | string;
  recepy: TRecepy;
};
