import { where } from "sequelize";
import { Profile } from "../models/profile.model.js";

//Create
export const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    if (profile) {
      return res.status(201).json(profile);
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//Update
export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.update(req.body,{ where: { id: req.params.id } });
    if (profile) {
      return res.status(200).json, profile;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

//GetByPK
export const getProfileByPK = async (req, res) => {
  try {
    const profile = await Profile.findByPk({ id });
    if (profile) {
      return res.status(200).json, profile;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

//Get
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findAll();
    if (profile) {
      return res.status(200).json, profile;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

//Delete
export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.destroy({ where: { id: req.params.id } });
    if (profile) {
      return res.status(200).json({ Message: "Profile Borrado Exitosamente" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};
