import Data from "../models/Data.js";

export const getData = async (req, res) => {
  try {
    const dataFound = await Data.find();
    res.json(dataFound);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const postData = async (req, res) => {
  try {
    const { input, value } = req.body;
    const newData = new Data({ input, value });
    await newData.save();
    res.json(newData);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const putData = async (req, res) => {
  try {
    const { input, value, id } = req.body;
    const dataActualized = await Data.findByIdAndUpdate(
      id,
      { input, value },
      { new: true }
    );
    res.json(dataActualized);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteData = async (req, res) => {
  try {
    const { id } = req.body;
    await Data.findByIdAndDelete(id);
    res.json("Data deleted.");
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getDataByID = async (req, res) => {
  try {
    const { id } = req.body;
    const dataFound = await Data.findById(id);
    res.json(dataFound);
  } catch (e) {
    res.status(500).json(e);
  }
};
