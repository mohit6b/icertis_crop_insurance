import pandas as pd
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import train_test_split
import numpy as np
import sklearn
from joblib import dump, load
def test_date(path_dir):
    data = pd.read_csv(path_dir,parse_dates=["Date"])
    data["Rainfall_codes"] = data.Rainfall_Class.astype("category")
    data["Rainfall_codes"] = data.Rainfall_codes.cat.codes
    data = data[['Rainfall_codes', 'Drought', 'User Class','Loan_Amount']]
    X_train = data.drop("Loan_Amount",axis=1)
    X_test = X_train[:1]
    return X_test
# Y_train = data["Loan_Amount"]
# np.random.seed(2)
# tree = DecisionTreeRegressor()
# tree.fit(X_train,Y_train)




def pred_to_amount(prediction,amount):
    #rn = abs(np.random.randn(1))
    #rn =abs(np.random.uniform(low=0.5, high=1, size=(1)))
    new_predicit = prediction
    if new_predicit<0.5:
        loan_amount = 0
    elif 0.5<new_predicit<0.75:
        loan_amount = amount* 0.5
    elif 0.75<new_predicit<0.9:
        loan_amount = amount*0.75
    else:
        loan_amount = amount
    reimburse = int(loan_amount)
    return reimburse

if __name__ == '__main__':
    path = "/home/mohit/Desktop/icertis/utkarsh/model/data.csv"
    from joblib import dump, load
    tree = load("model.joblib")
    X_test = test_date(path)
    pred = tree.predict(X_test[:1])[0]
    pred = pred_to_amount(pred,5000)
    print(pred)

