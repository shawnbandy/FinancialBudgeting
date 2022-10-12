const router = require('express').Router();
const { Household } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      
      const householdData = await Household.findAll({
        include: [
          {
            model: Budget,            
          },
        ],
      });
  
      // Serialize data so the template can read it
      const households = householdData.map((household) => household.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        households, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const householdData = await Household.findByPk(req.params.id, {
        // JOIN with locations, using the Trip through table
        include: [{ model: Budget, through: Trip, as: 'planned_trips' }]
      });
  
      if (!tData) {
        res.status(404).json({ message: 'No traveller found with this id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
