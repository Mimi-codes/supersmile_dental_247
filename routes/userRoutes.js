const express = require('express')
const { loginController, registerController, authController, getAllNotificationController, deleteAllNotificationController, applyDoctorController, getAllDoctorsController, bookAppointmentController,userAppointmentsController, bookingAvaiabilityController, bookingAvailabilityController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

//router object
const router = express.Router()

//routes
//LOGIN || POST
router.post('/login', loginController)

//REGISTER || POST
router.post('/register', registerController)

//Auth || POST
router.post('/getUserData', authMiddleware, authController)

//apply-doctor | POST
router.post('/apply-doctor', authMiddleware, applyDoctorController)

//Notification || POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController)

//delete all Notification || POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);

//GET ALL DOC
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController)

//BOOKING AVAILABILITY
router.post('/booking-availability', authMiddleware, bookingAvailabilityController)

//APPOINTMENTS LIST
router.get('/user-appointments', authMiddleware, userAppointmentsController)

module.exports = router