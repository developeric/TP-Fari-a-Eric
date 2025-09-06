import { body, param } from "express-validator";
import { Profile } from "../../models/profile.model.js";

export const createProfileValidator = [
  body("first_name")
    .notEmpty()
    .withMessage("Este Campo no puede estar vacio")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ max: 50 })
    .withMessage("Tiene un limite de 50 Caracteres"),

  body("last_name")
    .notEmpty()
    .withMessage("Este Cmapo no puede estar vacio")
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .isLength({ max: 50 })
    .withMessage("Tiene un limite de 50 caracteres"),

  body("biography")
    .optional()
    .isString()
    .withMessage("Tiene que ser un valor Text"),

  body("avatar_url")
    .optional()
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ max: 255 })
    .withMessage("Tiene un limite de 255"),

  body("birth_date").optional().isDate().withMessage("Tiene que ser un DATE"),
];

export const updateProfileValidator = [
  body("first_name")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar vacio")
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ max: 50 })
    .withMessage("Tiene un limite de 50 Caracteres"),

  body("last_name")
    .optional()
    .notEmpty()
    .withMessage("Este Cmapo no puede estar vacio")
    .isString()
    .withMessage("Este campo tiene que ser un string")
    .isLength({ max: 50 })
    .withMessage("Tiene un limite de 50 caracteres"),

  body("biography")
    .optional()
    .isString()
    .withMessage("Tiene que ser un valor Text"),

  body("avatar_url")
    .optional()
    .isString()
    .withMessage("Tiene que ser un STRING")
    .isLength({ max: 255 })
    .withMessage("Tiene un limite de 255"),

  body("birth_date").optional().isDate().withMessage("Tiene que ser un DATE"),
];

export const getProfileByPKValidator = [
  param("id")
    .isInt()
    .withMessage("El valor tiene que ser un entero")
    .custom(async (value) => {
      const profile = await Profile.findByPk(value);
      if (!profile) {
        return res.status(404).json("No se ha podido encontrar");
      }
    }),
];

// export const deleteProfileValidator = [
//   param("id").isInt().withMessage("El valor tiene que ser un entero")
//   .custom(async (value)=>{

//   })
// ]