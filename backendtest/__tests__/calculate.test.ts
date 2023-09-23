import {calculatePartHealth, calculateMachineHealth} from '../calculations';
import {
  MachineType,
  WeldingRobotPart,
  partInfo, AssemblyLinePart, PaintingStationPart,
} from '../../native-app/data/types';

describe('calculatePartHealth', () => {
  it('calculates part health correctly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 0.5};
    const expectedHealth = 72.22222222222223;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculateMachineHealth', () => {
  it('calculates machine health correctly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const parts = [
      {name: WeldingRobotPart.ErrorRate, value: 0.5},
      {name: WeldingRobotPart.VibrationLevel, value: 4.0},
      {name: WeldingRobotPart.ElectrodeWear, value: 0.8},
      {name: WeldingRobotPart.ShieldingPressure, value: 12.0},
      {name: WeldingRobotPart.WireFeedRate, value: 7.5},
      {name: WeldingRobotPart.ArcStability, value: 92.0},
      {name: WeldingRobotPart.SeamWidth, value: 1.5},
      {name: WeldingRobotPart.CoolingEfficiency, value: 85.0},
    ];
    const expectedHealth = 76.70138888888889;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});


// Added
describe('calculateAssemblyLineMachineHealth', () => {
  it('verifies part health is correct', () => {
    const type: MachineType = MachineType.AssemblyLine;
    const partData: partInfo = {
      name: AssemblyLinePart.AlignmentAccuracy,
      value: 0.3,
    };
    const expectedResult = 61.111111111111114;
    const realResult = calculatePartHealth(type, partData);
    expect(realResult).toBe(expectedResult);
  });


  it('verifies machine health is correct', () => {
    const type: MachineType = MachineType.AssemblyLine;
    const partData = [
      {
        name: AssemblyLinePart.AlignmentAccuracy,
        value: 0.3,
      },
      {
        name: AssemblyLinePart.BeltSpeed,
        value: 1.0,
      },
      {
        name: AssemblyLinePart.FittingTolerance,
        value: 0.05,
      },
      {
        name: AssemblyLinePart.Speed,
        value: 10.0,
      },
    ];
    const expectedResult = 77.77777777777777;
    const realResult = calculateMachineHealth(type, partData);
    expect(realResult).toBe(expectedResult);
  });
});

describe("calculatePaintingStationHealth", () => {
  it("verify part health is correct", () => {
    const type: MachineType = MachineType.PaintingStation;
    const partData: partInfo = {
      name: PaintingStationPart.FlowRate,
      value: 25.0,
    };
    const expectedResult = 75.0;
    const realResult = calculatePartHealth(type, partData);
    expect(realResult).toBe(expectedResult);
  });

  it("verify machine health is correct", () => {
    const type: MachineType = MachineType.PaintingStation;
    const partData = [
      {
        name: PaintingStationPart.Pressure,
        value: 25.0,
      },
      {
        name: PaintingStationPart.NozzleCondition,
        value: 0.9,
      },
    ];
    const expectedResult = 47.5;
    const realResult = calculateMachineHealth(type, partData);
    expect(realResult).toBe(expectedResult);
  });
});
