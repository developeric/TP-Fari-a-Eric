import { Profile } from "../models/profile.model.js";

export const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    if (profile) {
      return res.status(201).json(profile);
    }
  } catch (error) {
    res.status(500).json(error)
    console.log(error);
  }
};
