import unittest
import warnings
from test_model import predict_disease

class TestFeatureNames(unittest.TestCase):
    def test_for_feature_name_warning(self):
        with warnings.catch_warnings(record=True) as w:
            warnings.simplefilter("always")
            predict_disease("fever,headache")

            # Check if the warning was raised
            for warning in w:
                if issubclass(warning.category, UserWarning) and "does not have valid feature names" in str(warning.message):
                    self.fail("UserWarning for missing feature names was raised.")

if __name__ == '__main__':
    unittest.main()
